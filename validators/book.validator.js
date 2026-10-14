import { z } from "zod";
export const bookSchema = z.object({
    title:z.string().trim().min(1,"Title is required"),
    price:z.number().positive("Price must be greater than 0"),
    description:z.string().trim().max(200,"Description must be at most 200 characters"),
    stock:z.number().int().nonnegative("Stock must be greater than or equal to 0"),
    isbn:z.string().min(1,"ISBN is required"),
    image:z.string().optional(),
    category:z.enum(["Fiction", "Non-Fiction", "Science Fiction", "Fantasy", "History"],"Invalid category"),
    author:z.string().trim().min(1,"Author is required"),





})