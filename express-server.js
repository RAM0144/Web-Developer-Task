import express from "express";

import connectToDb from "./db-utils/mongodb-connection.js";

import studentsDbRouter from "./assign-mentor/Students-db.js";
import MentorDbRoutor from "./assign-mentor/Mentors-db.js";


const Server = express();

Server.use(express.json());

await connectToDb();

Server.use("/Students", studentsDbRouter);

Server.use("/Mentor", MentorDbRoutor);


const port = 5900;

Server.listen(port, () => {
    console.log( Date().toString(), `listening on port ${port}`);
});