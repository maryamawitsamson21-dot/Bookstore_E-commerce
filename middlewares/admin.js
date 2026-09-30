export const admin=(req,res,next)=>{
    try{
const user=req.user
if(user.role==='user'){
    
    return res.status(401).json({
        success:false,
        message:`You are not an admin`
    })
}
next()
    }catch(error){
        console.log(`There is an error in middleware ${error}`)
    }
}