const express = require("express")
const expressGraphQl = require("express-graphql")
const schema = require("./schema/schema")
const cors = require("cors")
app = express()
app.use(cors())
// dotenv
require("dotenv").config()
// db
const db = require("./helpers/db.js")()


app.use("/graphql", expressGraphQl({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => {
    console.log('listen port 5000')
})