import { Document } from 'mongoose';


interface ITournament extends Document {
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrikers: Array<string>,
  bestPlayer: string,
  bestGoalkeeper: string,
  bestYoungPlayer: string,
}

export {
  ITournament,
};