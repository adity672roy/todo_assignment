import mongoose from "mongoose";

let isConnected  = false;

export const connectToDB = async ()  => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "Todo_APP",
    });
    isConnected = true;
    console.log("Mongodb is connected");
  } catch (err) {
    console.log(err);
  }
};
