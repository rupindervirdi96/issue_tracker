const express = require("express");
const router = express.Router();
const Report = require("../models/report.model");
const sendEmail = require("../services/nodemailer");

router.post("/", async (req, res) => {
  try {
    const { issue, location, details } = req.body;
    const { fName, lName, email, description } = details;

    const sent = await sendEmail(req.body);
    console.log(sent);
    if (sent) {
      let report = new Report({
        fName,
        lName,
        email,
        issue,
        location,
        description,
      });

      await report.save();

      return res.json({ success: true, msg: "Reported Successfully." });
    }
    return res.json({ success: false, msg: "Something went wrong." });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

// Get all Complaints to display on the map
// router.get('/getAll', (req, res) => {});

module.exports = router;
