const express = require("express");

const Property = require("../models/property");

const router = express.Router();

router.post("", async (req, res, next) => {
  try {
    if (req.body.name === "" || req.body.units.length === 0) {
      return res.status(400).send({ error: "You need to fill all fields." });
    } else {
      const property = await Property.create(req.body);
      return res.send({ property });
    }
  } catch (error) {
    return res.status(400).send({ error });
  }
});

router.get("", async (req, res, next) => {
  try {
    if (req.query.bedrooms) {
      const properties = await Property.find().sort("name");
      const filteredPropertyByBedroom = properties.filter((property) => {
        let bedrooms = 0;
        property.units.map((unit) => (unit === "bedroom" ? bedrooms++ : null));
        if (bedrooms === Number(req.query.bedrooms)) {
          return property;
        }
      });
      if (filteredPropertyByBedroom.length > 0) {
        return res.send({ properties: filteredPropertyByBedroom });
      } else {
        return res.status(200).send({
          error: `We cant found property with ${req.query.bedrooms} bedrooms.`,
        });
      }
    } else {
      const properties = await Property.find().sort("name");
      return res.send({ properties });
    }
  } catch (error) {
    return res.status(400).send({ error });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Property.findByIdAndRemove(req.params.id);
    return res.send(200);
  } catch (error) {
    return res.status(400).send({ error: "We cant delete that property." });
  }
});

module.exports = (app) => app.use("/properties", router);
