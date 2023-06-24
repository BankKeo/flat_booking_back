const router = require("express").Router();
const flatOwnerCtrl = require("../controllers/flatOwnerCtrl");

router.post("/getFlatOwner/:id", flatOwnerCtrl.fineOne);
router.get("/getFlatOwners", flatOwnerCtrl.fineMany);
router.post("/create", flatOwnerCtrl.craete);
router.put("/update/:id", flatOwnerCtrl.update);
router.delete("/:id", flatOwnerCtrl.delete);

module.exports = router;
