const express = require("express");

const Property = require("../models/property");

const router = express.Router();

router.post("", async (req, res, next) => {
  try {
    const property = await Property.create(req.body);
    return res.send({ property });
  } catch (error) {
    return res.status(400).send({ error });
  }
});

router.get("", async (req, res, next) => {
  try {
    if(req.params.bedrooms){
      
    }
    const properties = await Property.find().sort("name");
    return res.send({ properties });
  } catch (error) {
    return res.status(400).send({ error });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Property.remove(req.params.id);
  } catch (error) {
    return res.status(400).send({ error });
  }
});

module.exports = (app) => app.use("/properties", router);
