import { type RequestHandler } from 'common/types';

export type Controller = {
  [key: string]: RequestHandler,
}
