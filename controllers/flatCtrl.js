const Flats = require("../models/flatModel");

const flatCtrl = {
  fineOne: async (req, res) => {
    try {
      const flatOwner = await Flats.findById(req.params.id);
      if (!flatOwner) {
        return res.json({ msg: "ບໍ່ພົບຫ້ອງແຖວນີ້ນີ້" });
      } else {
        return res.json(flatOwner);
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  fineMany: async (req, res) => {
    try {
      const flatOwner = await Flats.find();

      return res.json(flatOwner);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  craete: async (req, res) => {
    try {
      const { flatName, image, tel, village, district, province, amountOfRoom, googleMapLink } = req.body;
      if (!image) return res.status(400).json({ msg: "ບໍ່ພົບຮູບພາບ" });

      const newFlat = new Flats({
        flatOwnerId,
        image,
        flatName,
        tel,
        village,
        district,
        province,
        amountOfRoom,
        googleMapLink,
      });

      await newFlat.save();

      return res.json({ msg: "ສ້າງສຳເລັດແລ້ວ" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { flatName, image, tel, village, district, province, googleMapLink } = req.body;
      if (!image) return res.status(400).json({ msg: "ບໍ່ພົບຮູບພາບ" });

      await Flats.findOneAndUpdate(
        { _id: req.params.id },
        {
          image,
          flatName,
          tel,
          village,
          district,
          province,
          googleMapLink,
        }
      );

      res.json({ msg: "ອັບເດດສຳເລັດແລ້ວ" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      await Flats.findByIdAndDelete(req.params.id);
      res.json({ msg: "ລົບສຳເລັດແລ້ວ" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = flatCtrl;
