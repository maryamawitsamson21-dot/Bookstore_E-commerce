export const forDeactivateUser= async (req,res)=>{
   
        const {id}=req.params
        const user=await User.findById(id)
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        user.isActive=false
        await user.save()
        res.status(200).json({ message: "User deactivated successfully" });
   
}