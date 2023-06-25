const router = require("express").Router();
const flatCtrl = require("../controllers/flatCtrl");
const auth = require("../middleware/auth");

router.post("/getFlat/:id", flatCtrl.fineOne);
router.get("/getFlats", flatCtrl.fineMany);
router.post("/create", auth, flatCtrl.craete);
router.put("/update/:id", auth, flatCtrl.update);
router.delete("delete/:id", auth, flatCtrl.delete);

module.exports = router;
