import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(bodyParser.urlencoded({ extended: false }));

router.use("/greetings", (req, res, send) => {
    res.send("Hello,  Gavlik Martin István  ");

});

export default router;