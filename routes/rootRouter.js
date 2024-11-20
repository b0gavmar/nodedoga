import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, send) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

export default router;