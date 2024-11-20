import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(bodyParser.urlencoded({ extended: false }));

router.use("/node", (req, res, send) => {
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.");

});

export default router;