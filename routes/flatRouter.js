const router = require("express").Router();
const flatCtrl = require("../controllers/flatCtrl");
const auth = require("../middleware/auth");

router.post("/getFlat/:id", flatCtrl.fineOne);
router.get("/getFlats", flatCtrl.fineMany);
router.post("/create", auth, flatCtrl.craete);

module.exports = router;
