const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log('Connected to mongoDB');
    } catch (error) {
        console.log('Notconnected to mongoDB');
        process.exit(1);
    }
}

module.exports = connectDB; 


