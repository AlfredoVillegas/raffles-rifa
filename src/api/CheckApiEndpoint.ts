import { Application, Request, Response } from 'express';

export const CheckApiEdpoints = (app: Application): void => {
  app.get('/api', (req: Request, res: Response) => {
    return res.status(200).send('OK');
  });
};
