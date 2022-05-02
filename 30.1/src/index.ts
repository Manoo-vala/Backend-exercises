import App from './app';
import CustomRouter from './routes/CustomRouter';
import TournamentController from './controllers/TournamentController';
import { Tournament } from './types/interfaces/tournaments';

const app = new App();

const tournamentController = new TournamentController();

const tournamentRoute = new CustomRouter<Tournament>();
tournamentRoute.addRoute(tournamentController);

app.addRouter(tournamentRoute.router);

app.startServer();
