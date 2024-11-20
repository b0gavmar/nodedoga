import express from 'express'
import path from 'path'
import bodyParser from 'body-parser';
import { Router } from 'express';
import expresssRouter from './routes/expressRoute.js'
import greetingsRouter from './routes/greetings.js'
import nodeRouter from './routes/node.js'
import rootRouter from './routes/rootRouter.js'
import userRouter from './routes/user.js'

const app = express();
const PORT = 3000;
const router = express.Router();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(expresssRouter);
app.use(greetingsRouter)
app.use(nodeRouter)
app.use(rootRouter)


app.set('viewengine','ejs')
app.set('views','views');

app.use("/", (req, res, send) => {
    res.send("Hi, there!");
});

app.use(userRouter)

app.listen(PORT, () => console.log(`Hi, there!`));