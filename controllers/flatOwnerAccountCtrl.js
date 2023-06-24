const FlatOwnersAccount = require("../models/flatOwnerAccountModel");
const FlatOwners = require("../models/flatOwnerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const flatOwnerAccountCtrl = {
  create: async (req, res) => {
    try {
      const { username, password } = req.body;
      const flatOwnerId = req.params.id;

      if (password.length < 6) return res.json({ msg: "ລະຫັດຜ່ານຄວນມີຫຼາຍກ່ວາ 6 ໂຕ" });

      const passwordHash = await bcrypt.hash(password, 10);

      const newFlatOwnerAccount = new FlatOwnersAccount({
        flatOwnerId,
        username,
        password: passwordHash,
      });

      await newFlatOwnerAccount.save();

      return res.json({ msg: "ສ້າງສຳເລັດແລ້ວ" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body;

    const flatOwnerAccount = await FlatOwnersAccount.findOne({ username });

    if (!flatOwnerAccount) return res.status(400).json({ msg: "ບໍ່ພົບຜູ້ໃຊ້" });

    const isMatch = await bcrypt.compare(password, flatOwnerAccount.password);
    if (!isMatch) return res.status(400).json({ msg: "ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ" });

    // If login success , create access token and refresh token
    const accesstoken = createAccessToken({ id: flatOwnerAccount.flatOwnerId });
    const refreshtoken = createRefreshToken({ id: flatOwnerAccount.flatOwnerId });

    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true,
      path: "/flatOwner/refresh_token",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
    });

    res.json({ accesstoken });
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/flatOwner/refresh_token" });
      return res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.status(400).json({ msg: "ກະລຸນາເຂົ້າສູ່ລະບົບຫຼືສະໝັກສະມາຊິກ" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(400).json({ msg: "ກະລຸນາເຂົ້າສູ່ລະບົບຫຼືສະໝັກສະມາຊິກ" });

        const accesstoken = createAccessToken({ id: user.id });

        res.json({ accesstoken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getflatOwnerAccount: async (req, res) => {
    try {
      const flatOwner = await FlatOwners.findById(req.flatOwnerAccount.id).select("-password");
      if (!flatOwner) return res.status(400).json({ msg: "ບໍ່ພົບບັນຊີຜູ້ໃຊ້" });
      res.json(flatOwner);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "11m" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

module.exports = flatOwnerAccountCtrl;
