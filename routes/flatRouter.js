const router = require("express").Router();
const flatCtrl = require("../controllers/flatCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.post("/getFlat/:id", flatCtrl.fineOne);
router.get("/getFlats", flatCtrl.fineMany);
router.post("/create", auth, authAdmin, flatCtrl.craete);
router.put("/update/:id", auth, authAdmin, flatCtrl.update);
router.delete("delete/:id", auth, authAdmin, flatCtrl.delete);

module.exports = router;
