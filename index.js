import express from "express";
import path from "path";
import * as dotenv from "dotenv";
import { routes } from './src/routes/routes.js';
dotenv.config();

let __dirname = path.resolve(path.dirname(''));
const app = express();

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));
