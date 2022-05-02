import { Request, Response } from 'express';
import DefaultService from '../services';
import { ControllerErrors } from '../types/interfaces/ErrorTypes';

export type ResponseError = {
  error: unknown,
}

export interface RequestWithBody<T> extends Request {
  body: T;
}

abstract class DefaultController<T> {
  abstract route: string;
  protected errors = ControllerErrors;

  constructor(protected service: DefaultService<T>) { }

  abstract create(req: RequestWithBody<T>, res: Response<T | ResponseError>
    ): Promise<typeof res>;

  read = async (
    _req: Request, res: Response<T[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const objs = await this.service.read();

      return res.status(200).json(objs);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  abstract readOne(
    req: Request<{id: string}>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;
}

export default DefaultController;
