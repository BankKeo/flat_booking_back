const router = require("express").Router();
const flatCtrl = require("../controllers/flatCtrl");
const auth = require("../middleware/auth");

router.post("/create", auth, flatCtrl.craete);

module.exports = router;
