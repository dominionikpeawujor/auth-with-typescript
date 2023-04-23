import dotenv from 'dotenv';
import express, { Application, Request, Response, urlencoded } from 'express';
import routes from './routes';
import {initialize} from '../passport-config';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';

if(process.env.NODE_ENV !== 'production')
{
  dotenv.config();
}


initialize(passport, ((email: any) => users.find((user: { email: any; }) => user.email === email)), ((id: any) => users.find((user: { id: any; }) => user.id === id)))

const users: any = [];

const app: Application = express();
const PORT: Number = 3000;

app.use(urlencoded({extended: false}));

app.use(flash());
app.use(session({
  secret: process.env.SECRET_KEY!,
  resave: false, //We won't receive session variable if nothing changed.
  saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session);


app.use('/api', routes);

app.post('/login', passport.authenticate("local", {
  successRedirect: '/',
  failureRedirect: '/login'
}))

app.get('/', (_req: Request, res: Response) => {
  res.send('Server Connected.');
});


app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
