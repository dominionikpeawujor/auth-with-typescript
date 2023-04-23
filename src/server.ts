import express, { Application, Request, Response, urlencoded } from 'express';
import routes from './routes';
// import initializePassport ;

const app: Application = express();
const PORT: Number = 3000;

app.use(urlencoded({extended: false}));

app.use('/api', routes);

app.get('/', (_req: Request, res: Response) => {
  res.send('Server Connected.');
});

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
