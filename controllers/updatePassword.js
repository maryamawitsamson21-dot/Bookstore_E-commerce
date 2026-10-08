import {User} from '../models/user.js'
import bcrypt from 'bcrypt'

export const updatePassword=async(req,res)=>{
    try{
        const {oldPassword,newPassword}=req.body
        if(!oldPassword||!newPassword||oldPassword.trim()===""||newPassword.trim()===""||oldPassword===undefined||newPassword===undefined){
            return res.json({
                success:false,
                message:"Please provide both old and new password"
            })
        }
const id=req.user.id
const findUser=await User.findById(id).select("+password")
if(!findUser){
    return res.json({
        success: false,
        message: "User not found"
    })
}
const findOldPassword=findUser.password
const isMatched=await bcrypt.compare(oldPassword,findOldPassword)
if(!isMatched){
    return res.json({
        success:false,
        message:"The password is incorrect"
    })
}
const salt = await bcrypt.genSalt(10)
        findUser.password = await bcrypt.hash(newPassword, salt)
await findUser.save()
return res.json({
    success:true,
    message:"Password successfully changed"
})

    }catch(error){
        console.log(`There is an error in updatePassword controller: ${error}`);
        return res.status(500).json({success:false, message:"Internal server error"});
    }
}