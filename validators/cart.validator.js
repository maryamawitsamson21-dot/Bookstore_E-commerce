import {z} from "zod";
export const cartSchema=z.object({
   
    items:z.array(z.object({
        book:z.string().regex(/^[a-f\d]{24}$/i, "Invalid book ID"),
        quantity:z.number().int().min(1,"Quantity must be at least 1")
}))
})