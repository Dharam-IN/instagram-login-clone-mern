import mongoose from "mongoose";

export const ConnectionDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected");
    } catch (error) {
        console.error(`Error in DB ${error}`);
    }
}
