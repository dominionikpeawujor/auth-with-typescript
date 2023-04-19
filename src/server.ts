import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: Number = 3000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Server Connected.');
});

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
