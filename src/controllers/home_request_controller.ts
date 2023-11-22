import { Request, Response } from "express";
import * as homeRequestService from "../services/home_request_service";

export const getHomeMessage = async (req: Request, res: Response) => {
  const homeMessage = homeRequestService.getHome();
  res.send(homeMessage);
};
