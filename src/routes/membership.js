
const express = require("express");
const router = express.Router();

const createMembership = require("../controllers/createMembership")
const fetchMembership = require("../controllers/fetchMembership");
const fetchAllMemberships = require("../controllers/fetchMemberships");

router.get("/", fetchAllMemberships);
router.post("/", createMembership)
router.get(":id", fetchMembership);

module.exports = router;