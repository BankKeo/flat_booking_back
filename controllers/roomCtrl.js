const Rooms = require("../models/roomModel");

const roomCtrl = {
  fineOne: async (req, res) => {
    try {
      const flatOwner = await Rooms.findById(req.params.id);
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
      const flatOwner = await Rooms.find();

      return res.json(flatOwner);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  craete: async (req, res) => {
    try {
      const { price, description, amountOfRoom } = req.body;
      const flatId = req.params.id;

      const newRoom = new Rooms({
        flatId,
        price,
        description,
        amountOfRoom,
      });

      await newRoom.save();

      return res.json({ msg: "ສ້າງສຳເລັດແລ້ວ" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { price, description, amountOfRoom } = req.body;

      await Rooms.findByIdAndUpdate({ _id: req.params.id }, { price, description, amountOfRoom });

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

module.exports = roomCtrl;
