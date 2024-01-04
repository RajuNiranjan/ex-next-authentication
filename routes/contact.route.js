const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all contacts");
});
router.post("/", (req, res) => {
  res.send("create contact");
});
router.put("/:id", (req, res) => {
  res.send(`update contact ${req.params.id}`);
});
router.delete("/:id", (req, res) => {
  res.send(`delete contact for ${req.params.id}`);
});

module.exports = router;
