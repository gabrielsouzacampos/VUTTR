import express from 'express';
import { router } from './routes';
import cors from 'cors';
import database from './database/index';
import swaggerUi = require('swagger-ui-express');
import fs = require('fs');
import 'reflect-metadata';

database();

const app = express();

const optionsCors: cors.CorsOptions = {
    methods: "GET,OPTIONS,PUT,POST,DELETE",
    origin: "*"
}

app.use(cors(optionsCors));

app.use(express.json());

app.use("/api", router);

const swaggerFile: any = (process.cwd()+"/swagger.json");
const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8');
const swaggerDocument = JSON.parse(swaggerData);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, null, null, null));

export { app };
