const router = require("express").Router();
const cloudinary = require("cloudinary");
const fs = require("fs");
const auth = require("../middleware/auth");

// we will upload image on cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.post("/upload", auth, (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) return res.status(400).json({ msg: "ບໍ່ພົບໄຟລຖືກອັບໂຫຼດ" });

    const file = req.files.file;

    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "ຮູບພາບຄວນມີຂະໜາດ 1024 * 1024" });
    }

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "ອັບໂຫຼດຮູບພາບທີ່ເປັນ jpeg ຫຼື png" });
    }

    cloudinary.v2.uploader.upload(file.tempFilePath, { folder: "flat" }, async (err, result) => {
      if (err) throw err;

      removeTmp(file.tempFilePath);

      res.json({ public_id: result.public_id, url: result.secure_url });
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

// Delete image only admin can use
router.post("/destroy", auth, (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id) return res.status(400).json({ msg: "ບໍ່ພົບໄຟລທີ່ຖືກເລືອກ" });

    cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
      if (err) throw err;

      res.json({ msg: "ລົບຮູບພາບສຳເລັດແລ້ວ" });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router;
