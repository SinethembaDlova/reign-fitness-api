
const express = require("express");
var cors = require('cors');
const router = express.Router();

app.use(cors())

const createMembership = require("../controllers/createMembership")
const fetchMembership = require("../controllers/fetchMembership");
const fetchAllMemberships = require("../controllers/fetchMemberships");

router.get("/", cors(), fetchAllMemberships);
router.post("/", createMembership)
router.get(":id", cors(), fetchMembership);

module.exports = router;