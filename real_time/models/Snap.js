const mongoose = require('mongoose')
const Schema = mongoose.Schema

const snapSchena = new Schema({
    user_id: {
        type: Schema.ObjectId
    },
    text: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("snap", snapSchena)