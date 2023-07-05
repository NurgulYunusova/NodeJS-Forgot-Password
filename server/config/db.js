const { default: mongoose } = require("mongoose");

const db = {
  connect: async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://NurgulYunusova:KlSyNX3ocRNqLMtQ@cluster0.ghrat3c.mongodb.net/fp"
      );
      console.log("CONNECTED!");
    } catch (err) {
      console.log("Mongodb connection error!!");
      console.log(err);
    }
  },
};

module.exports = {
  db,
};
