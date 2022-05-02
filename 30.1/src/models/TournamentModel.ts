import { Schema, model as createModel, Document, Types } from 'mongoose';
import { 
  // ITournament,
  Tournament } from '../types/interfaces/tournaments';
import MongoModel from './mongoModel';

interface TournamentDocument extends Tournament, Document { }

export const tournamentSchema = new Schema<TournamentDocument>({
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

class TournamentModel extends MongoModel<Tournament> {
  constructor(model = createModel('tournaments', tournamentSchema)) {
    super(model);
  }
}

export default TournamentModel;
