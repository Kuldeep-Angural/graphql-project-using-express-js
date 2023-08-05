const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql").graphqlHTTP;
const graphQlSchema = require("./graphQl/schema/index");
const graphQlResolvers = require("./graphQl/resolver/index");
const mongoose = require("mongoose");
const isAuth=require("./middelware/is-Auth");


require("dotenv").config();
const port = process.env.PORT;
const app = express();
app.use(bodyParser.json());

app.use((req,res,next)=>{
 res.setHeader('Access-Control-Allow-Origin','*');
 res.setHeader('Access-Control-Allow-Methods','POST,GET,OPTIONS');
 res.setHeader('Access-Control-Allow-Headers','Content-Type , Authorization');
 if(req.method==='OPTIONS'){
  return res.sendStatus(200);
 }

 next();
});
app.use(isAuth);
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
    console.log("Wait until Project Build Finishes");
    app.listen(port, () =>
      console.log(
        "Congratulations Server started Successfully on port:",
        port,
        ", Data base name :",
        process.env.MONGO_DB
      )
    );
  })
  .catch((err) => {
    console.log(err);
  });
