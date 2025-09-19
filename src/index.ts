/*****
 Contributors

 * Interledger Foundation
 - Pedro Sousa Barreto <pedrosousabarreto@gmail.com>

 --------------
 ******/

"use strict";

import express from "express";
import cors from "cors";

const LISTEN_PORT = 3000

const app = express();

// Enable CORS for all origins (for development or specific use cases)
app.use(cors());

// Enable unpacking of json body in POST requests
// NOTE: requests have have a "content-type" header with value "application/json"
app.use(express.json());

// HANDLE THE REQUESTS

// Example of get request without parameters
// call like: GET http://localhost:3000/
app.get("/", (req:express.Request, res:express.Response) => {
    res.send("Hello World!")
});

// Example of get request with parameters
// call like: GET http://localhost:3000/example_params?name=pedro
app.get("/example_params", (req:express.Request, res:express.Response) => {
    // extract and validate query parameter
    const inputParam = req.query["name"] || undefined;
    if(!inputParam){
        return res.status(400).send("Please pass a name parameter");
    }

    res.send(`Hello ${inputParam}!`);
});

// Example of POST request
// call like: POST http://localhost:3000/example_post
// a body object must be included and a "content-type" header with value "application/json" included
app.post("/example_post", (req:express.Request, res:express.Response) => {
    //extract body object
    const inputBodyObj = req.body;
    if(!inputBodyObj){
        return res.status(400).send("Please include a non-empty object in the post request");
    }
    res.send("Hello, this is your object: "+JSON.stringify(inputBodyObj, null, 2));
});

// Not found handler, this will catch request that are not caught
// by other routes should be at the end
app.use((req:express.Request, res:express.Response)=> {
    res.status(404).send("Not Found");
    return;
});

// Start the server listening on TCP port defined by LISTEN_PORT
app.listen(LISTEN_PORT, (error?: Error) => {
    if(error){
        console.error(error);
        return;
    }

    console.log(`Example app listening on port ${LISTEN_PORT}`)
});
