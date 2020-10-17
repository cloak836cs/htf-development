import * as functions from 'firebase-functions';
import { Request, Response } from "express";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors({ origin: true }));
functions.logger.info("Starting Application");

// example function that returns hello world
app.get("/hello", (request: Request, response: Response) => {
    response.json({
        message: "hello world!"
    });
});

/* Change things below this line */

// import functions
import { hello_first, first_last } from "./api/template";
import { hello_awab, awab_abdelrahim } from "./api/awab";

app.get("/first-last", first_last);
app.get("/hello-first-last/:name", hello_first);
app.get("/hello-awab-utd/:name", hello_awab);
app.get("/awab-utd", awab_abdelrahim);

/* Change things above this line */

//the line of code below will deploy to firebase cloud functions instead of running locally
//leave this line commented
//export const api = functions.https.onRequest(app);

//the line of code below will run this locally
app.listen(8079);
