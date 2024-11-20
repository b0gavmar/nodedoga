import express from 'express'
import path from 'path'
import bodyParser from 'body-parser';
import { Router } from 'express';
import expresssRouter from './routes/expressRoute.js'
import greetingsRouter from './routes/greetings.js'
import nodeRouter from './routes/node.js'

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expresssRouter);
app.use(greetingsRouter)
app.use(nodeRouter)

app.set('viewengine','ejs')
app.set('views','views');



/*app.use((req,res) => {
    res.render('/',{
        pageTitle: "Oldal",
        path: 'index.html'
    })
});
*/
app.use("/",(req,res,send) => {
    res.send("Hi, there!");
});


app.listen(PORT, () => console.log(`Hi, there!`));