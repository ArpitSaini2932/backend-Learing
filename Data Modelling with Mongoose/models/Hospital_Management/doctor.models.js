// Import mongoose library
// Mongoose helps connect Node.js with MongoDB

import mongoose from "mongoose"

// ==========================================
// SUB-SCHEMA:
// Information about hospitals where
// doctor works
// ==========================================

const worksInHospital = new mongoose.Schema({

    // Reference to Hospital document

    // ObjectId creates relationship between
    // Doctor collection and Hospital collection

    Hospital: {

        // MongoDB unique document ID type
        type: mongoose.Schema.Types.ObjectId,

        // ref tells mongoose which collection/model
        // this ObjectId belongs to

        ref: "Hospital",

        required: true
    },

    // Number of working hours in that hospital

    WorkingHours: {
        type: Number,
        required: true
    }
})

// ==========================================
// MAIN DOCTOR SCHEMA
// Defines structure of Doctor documents
// ==========================================

const doctorSchema = new mongoose.Schema(

    {

        // Doctor name

        name: {
            type: String,
            required: true,
        },

        // Educational qualification
        // Example: MBBS, MD, BDS

        qualification: {
            type: String,
            required: true,
        },

        // Doctor salary

        // NOTE:
        // Better to use Number instead of String
        // for salary calculations later

        salary: {
            type: String,
            required: true,
        },

        // Array of hospitals where doctor works

        worksInHospitals: 

            
                // Array contains sub-documents
                // based on worksInHospital schema
                [worksInHospital]
            
        ,

        // Years of experience

        experienceInYears: {
            type: Number,

            required: true,

            // Default value if not provided

            default: 0,
        },

    },

    // Automatically adds:
    // createdAt
    // updatedAt

    { timestamps: true }
)

// Create Doctor model

// "Doctor" = collection/model name
// doctorSchema = schema structure

export const Doctor = mongoose.model("Doctor", doctorSchema)