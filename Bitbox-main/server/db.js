const mongoose = require('mongoose');

// Vercel par host hone par ye MONGO_URI variable se link uthayega
// Local machine par ye localhost wala link use karega
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Bitbox";

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoURI);
        console.log('Connected to Mongo Successfully');
    } catch (error) {
        console.error('Mongo connection error:', error);
        process.exit(1); // Agar connect na ho toh process stop kar de
    }
}

module.exports = connectToMongo;