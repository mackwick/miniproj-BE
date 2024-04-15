//DEPENDENCIES
import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as BookService from "./book.service";

export const bookRouter = express.Router();

//INDEX
bookRouter.get("/", async (req: Request, res: Response) => {
  try {
    const books = await BookService.listBooks();
    return res.status(200).json(books);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

//CREATE
bookRouter.post("/", async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const book = await BookService.createBook(req.body);
    return res.status(201).json(book);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});

//SHOW
bookRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const book = await BookService.getBook(id);
    if (book) {
      return res.status(200).json(book);
    }
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
});
