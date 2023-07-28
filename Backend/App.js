const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');
const mongoose=require('mongoose');
require('dotenv').config();
const port=process.env.PORT||8080;

const app = express();
const events=[];

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(`
    type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
      }

      input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
      }

      type RootQuery {
          events: [Event!]!
      }

      type RootMutation {
          createEvent(eventInput: EventInput): Event
      }

      schema {
          query: RootQuery
          mutation: RootMutation
      }
  `),
  rootValue: {
    events: () => {
      return events;
    },
    createEvent: args => {
      const event = {
        _id: Math.random().toString(),
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: args.eventInput.date
      };
      events.push(event);
      return event;
    }
  },
  graphiql: true
})
);
mongoose.connect(process.env.MONGO_DATABASE_SRV)
.then(()=>{
  app.listen(port, () => console.log("=================> Wait until Project Build Finishes",'\n',"Congratulations Server started Successfully on port:",port));
}).catch(err=>{console.log(err)});


