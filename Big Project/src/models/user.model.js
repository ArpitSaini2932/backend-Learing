import mongoose , {schema } from "mongoose"

const userSchema = new schema(
    {
        username: {
            type: String,
            required: true,
            unique : true,
            lowercase :true,
            index : true,
            trim : true
        },
        
        email: {
            type: String,
            required: true,
            unique : true,
            lowercase :true,
            trim : true
        },
       
        fullname: {
            type: String,
            required: true,
            index : true,
            trim : true
        },
        
        avatar: {
            type: String,
            required: true,
        },
        
        coverImage:{
            type: String
        },
        
        watchHistory :[
            {
                type: Schema.Types.ObjectId,
                ref:"Videos"
            }],
            
        password : {
            type: String,
            required : [true , "Password is required"]
            },
            
        refrestToken :{
                type: String
        }



    },
    {
        timestamps : true
    }
)

export const User  = mongoose.model("User",userSchema)