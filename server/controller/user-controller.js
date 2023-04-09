const User = require("../model/user-schema");

const userSignup = async (req, resp) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return resp.status(401).json({ message: "Username already exist" });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    resp.status(200).json({ message: user });
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
};

module.exports = userSignup;
