import express from 'express';
import { connection }from './models/connection';

export default class App {
  public express: express.Application;
  public connection: void;

  constructor() {
    this.express = express();
    this.middlewares();
    this.connection = connection('mongodb://localhost:27017/world_cups');
    this.routes();
    this.errorMiddlewares();
  }

  private middlewares() {
    this.express.use(express.json());
  }

  // Rotas virão aqui
  private routes () {
    this.express.use('');
  }

  private errorMiddlewares() {
    this.express.use('');
  }
}