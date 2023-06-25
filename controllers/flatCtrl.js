const Flats = require("../models/flatModel");

const flatCtrl = {
  craete: async (req, res) => {
    try {
      const { flatName, image, tel, village, district, province, googleMapLink } = req.body;
      const flatOwnerId = req.flatOwnerAccount.id;

      const newFlat = new Flats({
        flatOwnerId,
        image,
        flatName,
        tel,
        village,
        district,
        province,
        googleMapLink,
      });

      await newFlat.save();

      return res.json({ msg: "ສ້າງສຳເລັດແລ້ວ" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = flatCtrl;
