import express from "express";

import connectToDb from "./assign-mentor/db-utils/mongodb-connection.js";

import studentsDbRouter from "./assign-mentor/routes/Students-db.js";
import MentorDbRoutor from "./assign-mentor/routes/Mentors-db.js";


const Server = express();

Server.use(express.json());

await connectToDb();

Server.use("/Students", studentsDbRouter);

Server.use("/Mentor", MentorDbRoutor);



const port = 5900;

Server.listen(port, () => {
    console.log( Date().toString(), `listening on port ${port}`);
});