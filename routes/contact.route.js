const express = require("express");
const {
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controller/contact.controller");

const router = express.Router();

router.get("/", getContact);
router.post("/", createContact);
router.put("/:id", updateContact).delete("/:id", deleteContact);

module.exports = router;
