import express from 'express';
import 'dotenv/config';
import routes from './routes';
import error from './middlewares/error';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use(routes);
    this.express.use(error);
  }
}

export default new App().express;
