import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    datecreated:{
        type: Date,
        default: Date.now
    }
})

export const usermodel = mongoose.model("users", UserSchema);
