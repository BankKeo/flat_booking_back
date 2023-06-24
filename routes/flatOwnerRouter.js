const router = require("express").Router();
const flatOwnerCtrl = require("../controllers/flatOwnerCtrl");
const flatOwnerAccountCtrl = require("../controllers/flatOwnerAccountCtrl");
const auth = require("../middleware/auth");

router.post("/getFlatOwner/:id", flatOwnerCtrl.fineOne);
router.get("/getFlatOwners", flatOwnerCtrl.fineMany);
router.post("/create", flatOwnerCtrl.craete);
router.put("/update/:id", flatOwnerCtrl.update);
router.delete("/:id", flatOwnerCtrl.delete);
router.post("/createAccount/:id", flatOwnerAccountCtrl.create);
router.post("/login", flatOwnerAccountCtrl.login);
router.post("/refreshToken", flatOwnerAccountCtrl.refreshToken);
router.get("/getflatOwnerAccount", auth, flatOwnerAccountCtrl.getflatOwnerAccount);

module.exports = router;
