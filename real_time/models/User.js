const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const userSchena = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

userSchena.pre('save', function(next) {
    if (!this.isModified('password')) {
        next()
    }
    bcrypt.hash(this.password, 10).then(hash => {
        this.password = hash
        next()
    })
})

module.exports = mongoose.model("user", userSchena)