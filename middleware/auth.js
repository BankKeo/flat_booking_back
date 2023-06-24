const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(400).json({ msg: "ເຂົ້າສູ່ລະບົບບໍຖືກຕ້ອງ" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, flatOwnerAccount) => {
      if (err) return res.status(400).json({ msg: "ເຂົ້າສູ່ລະບົບບໍຖືກຕ້ອງ" });

      req.flatOwnerAccount = flatOwnerAccount;
      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = auth;
