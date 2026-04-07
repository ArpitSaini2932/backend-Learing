import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema(
    {
        patient_name : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient"
        },
        date :{
            type: Number,
            required: true
        },
        doctorAssigned : {
            type: "String",
            required: true
        },
        diagonsedWith: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient"
        },
        bloodGroup:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient"
        },
        admittedIn :{               
            type: mongoose.Schema.types.ObjectId,
            ref: "Hospital",
            required: true,
        },
    },
    {timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalR/ecordSchema)