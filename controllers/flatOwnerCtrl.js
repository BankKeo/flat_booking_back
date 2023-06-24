const FlatOwners = require("../models/flatOwnerModel");

const flatOwnerCtrl = {
  fineOne: async (req, res) => {
    try {
      const flatOwner = await FlatOwners.findById(req.params.id);
      if (!flatOwner) {
        return res.json({ msg: "ບໍ່ພົບບັນຊີນີ້" });
      } else {
        return res.json(flatOwner);
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  fineMany: async (req, res) => {
    try {
      const flatOwner = await FlatOwners.find();

      return res.json(flatOwner);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  craete: async (req, res) => {
    try {
      const { name, surname, tel, village, district, province } = req.body;

      const newFlatOwner = new FlatOwners({
        name,
        surname,
        tel,
        village,
        district,
        province,
      });

      await newFlatOwner.save();

      return res.json({ msg: "ສ້າງສຳເລັດແລ້ວ" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { name, surname, tel, village, district, province } = req.body;

      await FlatOwners.findByIdAndUpdate({ _id: req.params.id }, { name, surname, tel, village, district, province });

      return res.json({ msg: "ແກ້ໄຂສຳເລັດແລ້ວ" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      await FlatOwners.findByIdAndDelete(req.params.id);
      return res.json({ msg: "ລົບສຳເລັດແລ້ວ" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = flatOwnerCtrl;
