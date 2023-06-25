const router = require("express").Router();
const flatOwnerCtrl = require("../controllers/flatOwnerCtrl");
const flatOwnerAccountCtrl = require("../controllers/flatOwnerAccountCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.post("/getFlatOwner/:id", flatOwnerCtrl.fineOne);
router.get("/getFlatOwners", flatOwnerCtrl.fineMany);
router.post("/create", auth, authAdmin, flatOwnerCtrl.craete);
router.put("/update/:id", auth, authAdmin, flatOwnerCtrl.update);
router.delete("delete/:id", auth, authAdmin, flatOwnerCtrl.delete);
router.post("/createAccount/:id", auth, authAdmin, flatOwnerAccountCtrl.create);
router.post("/login", flatOwnerAccountCtrl.login);
router.post("/refreshToken", flatOwnerAccountCtrl.refreshToken);
router.get("/getFlatOwnerAccount", auth, authAdmin, flatOwnerAccountCtrl.getflatOwnerAccount);

module.exports = router;
