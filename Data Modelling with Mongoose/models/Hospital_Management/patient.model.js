import mongoose from "mongoose"

const patientSchema = new mongoose.Schema(
    {
        name :{
            type : String,
            required: true,   
        },
        diagonsedWith:{
            type: String,
            required: true,
        },
        age:{
            type: Number,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        bloodGroup:{
            type: String,
            required: true,
        },
        admittedIn :{
            type: mongoose.Schema.types.ObjectId,
            ref: "Hospital",
            required: true,
        },
        gender:{
            type: String,
            enum : ["M", "F", "O"],
            required: true,
        },

    },
    {timestamps:true})

export const Patient = mongoose.model("Patient", patientSchema)