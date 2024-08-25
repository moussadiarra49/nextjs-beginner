import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: [true, "PLEASE PROVIDE USERNAME"],
        unique: true,
    },


    email:{
        type: String,
        required: [true, "PLEASE PROVIDE EMAIL"],
        unique: true,
    },


    
    password:{
        type: String,
        required: [true, "PLEASE ENTER A PASSWORD"],
       
    },

    isVerified: {
        type: Boolean,
        default: false,
    },


    isAdmin: {
        type: Boolean,
        default: false,
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    
})

const User = mongoose.models.Users || mongoose.model 
("User", userSchema);

export default User ; 