const mongoose = require ('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('database online');
    } catch(error){
        console.log(error);
        throw new Error('error a la hora de iniciar base de datos');
    }
}

module.exports = {
    dbConnection,
}