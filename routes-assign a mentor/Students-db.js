import express from "express";

import { db } from "../db-utils/mongodb-connection.js";

const studentsDbRouter = express.Router();

const collection = db.collection("Students");

//* Create a Student
studentsDbRouter.post("/", async (req, res) => {
  try {
    const payload = req.body;
    await collection.insertOne({
      ...payload,
      id: Date.now().toString(),
      MentorId: null,

    });
    res.send({ msg: "Student Created Successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

// Get all the students 
studentsDbRouter.get("/", async (req, res) => {
  try {
    const Students = await collection.find({}, { projection: { _id: 0 } }).toArray();

    res.send({ msg: "Info About Students did not have Mentor", Students });

  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

//  Assign or Change Mentor for particular Student
studentsDbRouter.put("/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const updateInfo = req.body;

    await collection.updateOne(
      {
        id: studentId,
      },

      {
        $set: updateInfo,
      }
    );

    res.send({ msg: "Student Updated Successfully!" });

  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal Server Error" });

  }
});



export default studentsDbRouter;