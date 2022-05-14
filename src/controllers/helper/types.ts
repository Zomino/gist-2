import { type Request, type Response, type NextFunction } from 'express';

export type RouteHandler = (request: Request, response: Response, next: NextFunction) => void;
