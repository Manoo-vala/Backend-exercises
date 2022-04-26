import { connect, Schema, Types } from 'mongoose';
import { ITournament } from '../types/interfaces/tournaments';

export const connection = (uri: string) => {
  try {
    connect(uri);
    console.log(`Conectado ao mongodb em: ${uri}`);
  } catch (error) {
    console.log(error);
  }
};

export const tournamentSchema = new Schema<ITournament>({
  id: { type: Types.ObjectId },
  year: {type: Number, required: true},
  hostCountry: {type: String, required: true},
  champions: {type: String, required: true},
  runnerUp: {type: String, required: true},
  editionGoals: {type: Number, required: true},
  editionStrikers: {type: [{ type: String }], required: true},
  bestPlayer: {type: String, required: false},
  bestGoalkeeper: {type: String, required: false},
  bestYoungPlayer: {type: String, required: false},
});