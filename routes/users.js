var express = require('express');
var router = express.Router();

const { findUsers,findUserById,addUser,editUser,deleteUser } = require("../controllers/userController");

// Find User Data List Route
router.get('/', findUsers);

// Find User By Id Route
router.get('/:id', findUserById);


// Create User Route
router.post("/", addUser);


// Edit User Data Route
router.post("/:id", editUser);


// Delete User Route
router.delete("/:id", deleteUser);


module.exports = router;