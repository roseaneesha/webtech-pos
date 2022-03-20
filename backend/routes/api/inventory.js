const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const wineModal = require("../../modals/Inventory");
const userModal = require("../../modals/User");

router.get("/", async (req, res) => {
  try {
    const displayInventory = await wineModal.find({});
    res.json({
      displayInventory,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json("Server error");
  }
});
router.post(
  "/",

  [
    check("wineID", "Enter the wineID").not().isEmpty(),
    check("name", "Enter the name of wine").not().isEmpty(),
    check("age", "Enter the year of wine ").not().isEmpty(),
    check("typeOfWine", "Enter the kind of wine").not().isEmpty(),
    check("price", "Enter the price").not().isEmpty(),
  ],

  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.status(400).json({ error: err.array() });
    }
    const { wineID, name, age, typeOfWine, price } = req.body;

    try {
      const admin = await userModal.findOne({ empId: "0000" });
      const checkIdPresent = await wineModal.findOne({ wineId: wineID });
      if (admin) {
        if (!checkIdPresent) {
          //add inventory
          let inventory = new wineModal({
            wineID,
            name,
            age,
            typeOfWine,
            price,
          });
          await inventory.save();
          return res.json(inventory);
        } else {
          res.error({ error: "Invalid Id/check id again" });
        }
      } else {
        res.error({ error: "Need admin privileges" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json("Server error/failed to add to inventory");
    }
  }
);

//update TODO
router.put("/", async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(400).json("server error/update failed");
  }
});

//delete
router.delete("/wine/:_id", async (req, res) => {
  console.log("checked");
  // res.status(200).send(req.params.check);
  console.log(req.params.id);
  // try {
  // await wineModal.fineOneAndRemove({ _id: "62318b48bdd2088bcc8d2cd4" });
  wineModal.findOneAndDelete(_id).then((i) => {
    if (!i) return res.status(404).send(res.send("done"));
  });
  //   console.log("check over");
  //   res.json({ msg: "wine removed" });
  // } catch (error) {
  //   res.status(500).send("server error");
  // }
  res.send("nothing happened");
});

module.exports = router;
