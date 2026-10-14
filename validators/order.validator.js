import { z } from "zod";
export const orderSchema=z.object({
    user:z.string().regex(/^[a-f\d]{24}$/i, "Invalid user ID"),
    items:z.array(z.object({
        book:z.string().regex(/^[a-f\d]{24}$/i, "Invalid book ID"),
        quantity:z.number().int().min(1, "Quantity must be at least 1"),
        price:z.number().nonnegative("Price must be a non-negative number"),
        status:z.enum(["Pending","Confirmed","Shipped","Delivered","Cancelled"], "Invalid status"),
        total:z.number().nonnegative("Total must be a non-negative number")
    }))
})