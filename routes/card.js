var express = require('express');
var router = express.Router();

const { findCard, findCardById, addCard, editCard, deleteCard } = require("../controllers/cardController");

// Find Card Data List Route
router.get('/', findCard);

// Find Card By Id Route
router.get('/:id', findCardById);

// Add Card Route
router.post("/", addCard);

// Edit Card Data Route
router.post("/:id", editCard);

// Delete Card Route
router.delete("/:id", deleteCard);


module.exports = router;