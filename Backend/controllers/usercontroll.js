import { usermodel } from "../models/UserSchema.js";

export const Login = async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        return res.status(400).json({
            success: false,
            message: "Please Provide both username and password"
        })
    }

    const user = await usermodel.create({
        username: username,
        password: password
    })

    res.status(200).json({
        success: true,
        message: "Data Save in DB",
        user
    })
}
