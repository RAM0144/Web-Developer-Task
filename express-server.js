import express from "express";

import connectToDb from "./db-utils/mongodb-connection.js";

import studentsDbRouter from "./routes-assign a mentor/Students-db.js";
import MentorDbRoutor from "./routes-assign a mentor/Mentors-db.js";


const Server = express();

Server.use(express.json());

await connectToDb();

Server.use("/Students", studentsDbRouter);

Server.use("/Mentor", MentorDbRoutor);


const port = 5900;

Server.listen(port, () => {
    console.log(Date().toString(), `listening on port ${port}`);
});