import { Request, Response } from 'express';
import DefaultController, { RequestWithBody, ResponseError } from '.';
import TournamentService from '../services/TournamentService';
import { Tournament } from '../types/interfaces/tournaments';


class TournamentController extends DefaultController<Tournament> {
  private _route: string;

  constructor(
    service = new TournamentService(),
    route = '/tournaments',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (req: RequestWithBody<Tournament>, res: Response<Tournament | ResponseError>
  ): Promise<typeof res> => {
    const { body } = req;

    try {
      const tournaments = await this.service.create(body);
      if(!tournaments) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in tournaments) {
        return res.status(400).json(tournaments);
      }
      return res.status(201).json(tournaments);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{id: string}>,
    res: Response<Tournament | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    try {
      const tournament = await this.service.readOne(id);

      if(!tournament) {
        return res.status(404).json({ error: this.errors.notFound });
      }

      return res.status(200).json(tournament);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default TournamentController;
