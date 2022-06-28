var express = require("express");
var router = express.Router();

const { findHistory, findHistoryById, addHistory, editHistory, deleteHistory } = require("../controllers/historyController")

// Find History List Route
router.get("/", findHistory);

// Find History By Id Route
router.get("/:id", findHistoryById);

// Create History Route
router.post("/", addHistory);

// Edit History Data Route
router.post("/:id", editHistory);

// Delete History Route
router.delete("/:id", deleteHistory);

module.exports = router;