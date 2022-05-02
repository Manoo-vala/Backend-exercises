import express, { Router } from 'express';
import connection from './models/connection';

export default class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
  }

  public startServer(port = 3001) {
    connection();
    const actualPort = process.env.PORT || port;
    return this.app.listen(
      actualPort,
      () => console.log('Estamos online na porta: ', actualPort),
    );
  }

  private middlewares() {
    this.app.use(express.json());
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}