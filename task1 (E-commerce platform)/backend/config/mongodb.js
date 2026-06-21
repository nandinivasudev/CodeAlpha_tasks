import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);

  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;