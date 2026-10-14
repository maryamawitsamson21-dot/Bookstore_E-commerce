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
            if (!auth.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authorization header must use 'Bearer <token>' format"
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
         console.log("Verification result:", verification); // Log the verification result for debugging
         if(!verification.isActive){
            return res.status(403).json({success:false,message:"Your account is deactivated please contact the admin"})
         }
         req.user=verification
         next()

    }catch(error){
        console.log(`There are a error in the middleware ${error}`)
        return res.status(500).json({success:false, message:"Internal server error"});

    }
}