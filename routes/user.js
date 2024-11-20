import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Sam Johnson" },
];

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/api/users', (reg, res, next) => {
    userstring = "";
    users.forEach((x)=>{
        userstring+=x.name+";";
    })
    res.send(userstring);
});


export default router;