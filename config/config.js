const mongoose = require('mongoose');

// Connection of DB

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL)
        console.log(`MongoDB Connected :${conn.connection.host}`);
    }
    catch (error) {
        console.log(`Error message : ${error.message}`);
    }
}

// export 
module.exports = connectDB