const router = require("express").Router();
const roomCtrl = require("../controllers/roomCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.post("/getRoom/:id", roomCtrl.fineOne);
router.get("/getRoom", roomCtrl.fineMany);
router.post("/create", auth, authAdmin, roomCtrl.craete);
router.put("/update/:id", auth, authAdmin, roomCtrl.update);
router.delete("delete/:id", auth, authAdmin, roomCtrl.delete);

module.exports = router;
