const mongoose = require('mongoose')

const affilSchema = new mongoose.Schema
({
    partnerName: { type:String, required:true },
    email: { type:String, required:true },
    mobileNumber: { type:String, required:true },
    address: { type:String, required:true, unique:true },
    coverageState: { type:String,  }, // s3 link
    // commission: { type:String,  unique:false }, 
    status: { type:String,   },
 
}  , {timestamps :true})


module.exports = mongoose.model("affil",affilSchema)



