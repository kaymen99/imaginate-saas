import mongoose, { Mongoose } from "mongoose";

const MONGODB_KEY = process.env.MONGOOSE_API_KEY;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;
if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDB = async () => {
  if (cached.conn) return cached.conn;
  if (!MONGODB_KEY) throw new Error("Missing API KEY");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_KEY, {
      dbName: "imaginate",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};
