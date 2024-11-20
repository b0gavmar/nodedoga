import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(bodyParser.urlencoded({ extended: false }));

router.use("/express", (req, res, send) => {
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.");
    
});

export default router;