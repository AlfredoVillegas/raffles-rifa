import cors from 'cors';
import express, { Application, Router } from 'express';
import path from 'path';
import { registerRefflesRoutes } from '../modules/Raffle/raffles.route';
import { registerTicketsRoutes } from '../modules/Ticket/tickets.route';
import { registerUserRoutes } from '../modules/User/user.route';
import { CheckApiEdpoints } from './CheckApiEndpoint';

export class Server {
  private app: Application;
  private port: string;
  readonly apiPath = '/api';

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';
    this.middlewares();
    this.initRoutes();
    this.initSubscribers();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initRoutes() {
    CheckApiEdpoints(this.app);

    const router = Router();
    this.app.use('/api', router);

    registerUserRoutes(router);
    registerRefflesRoutes(router);
    registerTicketsRoutes(router);

    // Middleware para Vue.js router modo history
    const history = require('connect-history-api-fallback');
    this.app.use(history());
    console.log(path.join(__dirname, 'public'), 'paaaaaaaaaaaaaat');
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  initSubscribers() {}

  async listen() {
    this.app.listen(this.port, () => {
      console.log(` App is running at http://localhost:${this.port}${this.apiPath} `);
      console.log(' Press CTRL-C to stop\n');
    });
  }
}
