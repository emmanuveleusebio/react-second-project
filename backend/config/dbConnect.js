const mongoose = require('mongoose');

connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECT_MONGO);
        console.log("mongoDb connected", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.log(error,"not connected");
        process.exit(1);
    }
}

module.exports = connectDb;