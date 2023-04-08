const mongoose = require('mongoose')


const mongoDB =  async() => {
    const DB_URI = process.env.DB_URI;

    try {
        const conn = await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("********  CONECTED TO MONGO DATABASE  ***********")

    }catch (err){
        console.log(`Error to connect ${err.message} `);
        process.exit(1);
    }
}

module.exports = mongoDB;