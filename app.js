import express from 'express'
import path from 'path'
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Hi, there!`));