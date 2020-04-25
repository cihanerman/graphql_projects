const mongoose = require("mongoose")

module.exports = () => {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.on('open', () => {
        console.log("Database connected !")
    })
    mongoose.connection.on('error', err => {
        console.log(err)
    })
}