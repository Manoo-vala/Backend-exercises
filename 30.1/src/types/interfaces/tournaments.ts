import { Document } from 'mongoose';
import { z } from 'zod';

const tournamentSchema = z.object({
  year: z.number(),
  hostCountry: z.string(),
  champions: z.string(),
  runnerUp: z.string(),
  editionGoals: z.number(),
  editionStrikers: z.string().array(),
  bestPlayer: z.string(),
  bestGoalkeeper: z.string(),
  bestYoungPlayer: z.string(),
});

type Tournament = z.infer<typeof tournamentSchema>

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
  tournamentSchema,
  ITournament,
  Tournament,
};