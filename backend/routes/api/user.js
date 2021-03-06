const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const User = require("../../modals/User");
router.post(
  "/admin",
  [
    check("empName", "Enter the name of employee"),
    check("empId", "Enter the employee id"),
    check("password", "Enter a password with 7 or more character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.message });
    }
    const { empId, empName, password } = req.body;
    try {
      if (await User.findOne({ empId })) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Employee already exists" }] });
      }
      const newEmp = new User({
        empId,
        empName,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      newEmp.password = await bcrypt.hash(password, salt);
      newEmp.save();
      return res.status(200).send("added to db");
    } catch (error) {
      console.error(error.message);
      await res.status(500).send("Server error");
    }
  }
);

router.post(
  "/",
  [
    check("empId", "Please enter a valid employee Id").exists(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    try {
      const err = validationResult(req);
      if (!err.isEmpty()) {
        return res.status(400).json({ errors: err.message });
      }
      const { empId, password } = req.body;

      const emp = await User.findOne({ empId });
      if (!emp) {
        res.status(400).json({ msg: "Invalid credential" });
      }

      const isMatch = bcrypt.compare(password, emp.password);
      if (!isMatch) {
        res.status(400).json({ msg: "Invalid credential", error: err.message });
      }
      res.status(200).json({ msg: "Access granted" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
