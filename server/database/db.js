const mongoose = require("mongoose");

// module.exports = mongoose.connect("mongodb://127.0.0.1:27017/auth-user");

const connection = async (USERNAME, PASSWORD) => {
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.um4fmrq.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error While connecting with the database", error.message);
  }
};

module.exports = connection;
