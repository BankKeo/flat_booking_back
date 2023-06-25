const flatOwners = require("../models/flatOwnerModel");

const authAdmin = async (req, res, next) => {
  try {
    // Get user information by id
    const user = await flatOwners.findOne({
      _id: req.flatOwnerAccount.id,
    });
    if (user.role != 0 || user.role != 1) return res.status(400).json({ msg: "Admin resources access denied" });

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authAdmin;
