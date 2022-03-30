import express, { Request, Response } from 'express';
import PlantsRoute from './Routes/plantsRoute';
import SunnyRoute from './Routes/sunnyRoute';

const app = express();
app.use(express.json());

app.use('/plants', PlantsRoute);
app.use('/sunny', SunnyRoute);


app.listen(3000, () => {
  console.log('Lanai é gatar sim sim na porta 3000'); 
})