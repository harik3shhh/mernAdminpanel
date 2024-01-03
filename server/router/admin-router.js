const express = require("express");
const {getAllUsers, getAllContacts} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();


router.route("/users").get(authMiddleware, getAllUsers);
router.route("/contacts").get(getAllContacts);


module.exports = router;