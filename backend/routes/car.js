const express = require("express");
const carRouter = express.Router();

const carsSchema = require("../models/car");

//Create new post of car
carRouter.post("", async (req, res) => {
  try {
    const car = new carsSchema(req.body);

    const data = await car.save();
    res.status(200).send({ msg: "Created new car successfully!", data: data });
  } catch (err) {
    res.status(500).send("Created new car failed! ");
    console.log("wwwwwwwwwwwwww", err);
  }
});

// get all cars
carRouter.get("/all", async (req, res) => {
  try {
    const cars = await carsSchema.find();
    res.status(200).send({ msg: "Those are all the cars we have", data: cars });
  } catch (err) {
    res.status(500).send("Could not get all the car posts");
  }
});

// get cars
carRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const car = await carsSchema.findById(id);
    res
      .status(200)
      .send({ msg: "this is the car you asked for", data: car._doc });
  } catch (err) {
    res.status(500).send("could not get car by id");
  }
});

// get cars filtered by owner
carRouter.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const cars = await carsSchema.find({ owner: id });
    res.status(200).send({ msg: "this is the cars you asked for", data: cars });
  } catch (err) {
    res.status(500).send("could not car user by userid");
  }
});

module.exports = carRouter;
