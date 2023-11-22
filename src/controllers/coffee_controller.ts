import { Request, Response } from "express";
import * as coffeeService from "../services/coffee_service";

export const getCoffee = async (
  req: Request<Object, Object, Object, { coffeeName: string | undefined }>,
  res: Response
) => {
  const { coffeeName } = req.query;
  const coffee = coffeeService.getCoffee(coffeeName);
  res.json(coffee).status(200);
};
