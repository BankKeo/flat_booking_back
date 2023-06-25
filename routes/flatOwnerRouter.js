const router = require("express").Router();
const flatOwnerCtrl = require("../controllers/flatOwnerCtrl");
const flatOwnerAccountCtrl = require("../controllers/flatOwnerAccountCtrl");
const auth = require("../middleware/auth");

router.post("/getFlatOwner/:id", flatOwnerCtrl.fineOne);
router.get("/getFlatOwners", flatOwnerCtrl.fineMany);
router.post("/create", auth, flatOwnerCtrl.craete);
router.put("/update/:id", auth, flatOwnerCtrl.update);
router.delete("/:id", auth, flatOwnerCtrl.delete);
router.post("/createAccount", auth, flatOwnerAccountCtrl.create);
router.post("/login", flatOwnerAccountCtrl.login);
router.post("/refreshToken", flatOwnerAccountCtrl.refreshToken);
router.get("/getFlatOwnerAccount", auth, flatOwnerAccountCtrl.getflatOwnerAccount);

module.exports = router;
