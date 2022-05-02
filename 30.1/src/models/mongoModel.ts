import { Model as M, Document } from 'mongoose';
import CrudModel from '../types/interfaces/CrudModel';

abstract class MongoModel<T> implements CrudModel<T> {
  constructor(protected model: M<T & Document>) { }

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ _id: id });

  update(): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<T | null> {
    throw new Error(`Cannot find ${id} user`);
  }
}

export default MongoModel;
