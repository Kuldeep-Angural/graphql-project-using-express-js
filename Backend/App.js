const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql").graphqlHTTP;
const graphQlSchema = require("./graphQl/schema/index");
const graphQlResolvers = require("./graphQl/resolver/index");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);
mongoose
  .connect(process.env.MONGO_DATABASE_SRV)
  .then(() => {
    app.listen(port, () =>
      console.log(
        "=================> Wait until Project Build Finishes",
        "\n",
        "Congratulations Server started Successfully on port:",
        port,
        "/n",
        process.env.MONGO_DB
      )
    );
  })
  .catch((err) => {
    console.log(err);
  });
