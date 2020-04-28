const express = require('express');
const mongoose = require("mongoose")
require("dotenv").config()
const { ApolloServer, gql } = require('apollo-server-express');
const { importSchema } = require("graphql-import")
// resolvers
const resolvers = require("./graphql/resolvers")

// models
const User = require("./models/User")
const Snap = require("./models/Snap")

const server = new ApolloServer({
  typeDefs: importSchema("./graphql/schema.graphql"),
  resolvers: resolvers,
  context: {
    User,
    Snap
  }
});

mongoose.connect(process.env.DB_ONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected !"))
  .catch(e => console.log(e))
const app = express();

server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);