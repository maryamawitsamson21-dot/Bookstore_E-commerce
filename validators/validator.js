import { success } from "zod";

export const validator=(schema)=>(req,res,next)=>{
    const result=schema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            success:false,
            error:result.error.issues
        })
    }
    req.body=result.data // Assign the validated data back to req.body that way we can use the validated data in the next middleware or route handler
    next()
}

export const paramsValidator=(schema)=>(req,res,next)=>{
    const result=schema.safeParse(req.params);
    if(!result.success){
        return res.status(400).json({
            success:false,
            error:result.error.issues
        })
    }
    req.params=result.data // Assign the validated data back to req.params that way we can use the validated data in the next middleware or route handler
    next()
}   