const mongoose = require('mongoose')

const connectDb = async ()=>{

    try
    {
        const connection  = await mongoose.connect( "mongodb+srv://learnflow:MfgayGGvYR3Lx8uT@cluster0.sggmlyo.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    console.log('mongo db connected')

    }

    catch (error) 

    {
        console.log(error)
        process.exit(1)
    }
    
}

module.exports = connectDb