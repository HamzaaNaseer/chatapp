const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('database connected successfully ☑');
  } catch (error) {
    console.log("error", error.message);
    process.exit();
  }
};


module.exports = connectDB