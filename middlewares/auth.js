import jwt from 'jsonwebtoken'
export const auth=(req,res,next)=>{
    try{

        const auth=req.headers["authorization"]
        if(!auth){
            return res.status(401).json({
                success: false,
                message: "Access token is missing"
            });
        }
        const token=auth.split(" ")[1]
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Bearer token format is invalid"
            });

          
        }
         const verification= jwt.verify(token,process.env.JWT_SECRET)
         req.user=verification
         next()

    }catch(error){
        console.log(`There are a error in the middleware ${error}`)
        return res.status(500).json({success:false, message:"Internal server error"});

    }
}