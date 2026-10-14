import { z } from "zod";
import { bookSchema } from "./book.validator.js";
import { cartSchema } from "./cart.validator.js";
import { orderSchema } from "./order.validator.js";
export const updateBookData=bookSchema.partial()
export const updateCartData=cartSchema.partial()
export const updateOrderData=orderSchema.partial()


export const updateOrderStatusSchema = z.object({
  status: z.enum([
    "Pending",
    "Confirmed",
    "Shipped",
    "Delivered",
    "Cancelled"
  ]),
  bookId: z.string().regex(/^[a-f\d]{24}$/i, "Invalid book ID")
});
