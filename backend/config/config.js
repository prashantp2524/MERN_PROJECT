const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = mongoose.connect(
      `mongodb+srv://prashantp:Anilpp@cluster0.cw6lc.mongodb.net/shopping?authSource=admin&replicaSet=atlas-lvir0o-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex:true
      }
    );
    console.log(`MongoDB connected `);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
