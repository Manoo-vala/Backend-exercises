import { tournamentSchema, Tournament } from '../types/interfaces/tournaments';
import DefaultService, { ServiceError } from '.';
import TournamentModel from '../models/TournamentModel';

class TournamentService extends DefaultService<Tournament> {
  constructor(model = new TournamentModel()) {
    super(model);
  }

  create = async (obj: Tournament): Promise<Tournament | ServiceError | null> => {
    const parsedZod = tournamentSchema.safeParse(obj);

    if(!parsedZod.success) {
      return { error: parsedZod.error };
    }

    return this.model.create(obj);
  };
}

export default TournamentService;

