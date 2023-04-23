import express from 'express';
import users from './api/users';
const routes = express.Router();

routes.use('/users', users);
routes.get('/', (_req,res) => {
    res.send('Routes connected!')
})

export default routes;
