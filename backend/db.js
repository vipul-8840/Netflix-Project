import mongoose from "mongoose";

export const connectDB = async () => {

    try {
        const connect   = await  mongoose.connect(process.env.MONGO_URI);
        console.log("db connect")
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}