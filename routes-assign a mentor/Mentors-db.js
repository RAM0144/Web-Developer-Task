import express from "express";

import { db } from "../db-utils/mongodb-connection.js";

const MentorDbRoutor = express.Router();

const collection = db.collection("Mentor")

//* Create a Mentor
MentorDbRoutor.post("/", async (req, res) => {
    try {
        const CreateMent = req.body;

        await collection.insertOne({
            ...CreateMent,
            id: Date.now().toString(),
            StudentId: null,
        });
        res.send({ msg: "Mentor Created Successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

// Get a Mentor
MentorDbRoutor.get("/", async (req, res) => {
    try {
        const Mentor = await collection.find({}, { projection: { _id: 0 } }).toArray();
        res.send({ msg: "Info About Mentor", Mentor });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

// Assign a student to Mentor
MentorDbRoutor.put("/:MentorId", async (req, res) => {
    try {
        const MentorId = req.params.MentorId;
        const updateInfo = req.body;
        await collection.updateOne(
            {
                id: MentorId,
            },
            {
                $set: updateInfo,
            },

        );

        res.send({ msg: "Mentor Updated Successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

//All students for a particular mentor
MentorDbRoutor.get("/", async (req, res) => {
    try {

        const Mentor = await collection.find({}, { projection: { _id: 0 } }).toArray();

        res.send({ msg: "Info about students for a particular mentor!", Mentor });


    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});



export default MentorDbRoutor;