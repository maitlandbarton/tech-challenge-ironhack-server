const express = require('express');
const app = express();
const router = express.Router();
const phones = require('../phones.json');

router.get("/phones", (req, res) => {
  res.json(phones);
});

router.get("/phones/:id", (req, res) => {
  const id = Number(req.params.id);
  const phone = phones.find((phone) => phone.id === id);
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: "Phone not found" });
  }
});

module.exports = router;