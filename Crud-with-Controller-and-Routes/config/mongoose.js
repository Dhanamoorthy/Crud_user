const dotenv = require ('dotenv')

dotenv.config();


const config ={
    hostname:process.env.HOST || '127.0.0.1',
    port:process.env.PORT || 5000,
    mongodburi:process.env.MONGO_URL || 'mongodb://127.0.0.1/CRUDS'
}


module.exports = config