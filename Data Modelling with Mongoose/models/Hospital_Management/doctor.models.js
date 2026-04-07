import mongoose from " mongoose "

const worksInHospital = new mongoose.Schema({
    Hospital : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required : true
    },
    WorkingHours: {
        type: Number,
        required : true
    }
})

const doctorSchema  = new mongoose.Schema(
    {
        name : {
            type: String,
            required: true,
        },
        
        qualification : {
            type: String,
            required: true,
        },
        salary : {
            type: String,
            required: true,
        },
        worksInHospitals :[
             {
            type: [worksInHospital]
            }
        ],
        experienceInYears : {
            type: Number,
            required: true,
            default: 0,
        },

    },{timestamps:true})

export const Doctor  = mongoose.model("Doctor" , doctorSchema)