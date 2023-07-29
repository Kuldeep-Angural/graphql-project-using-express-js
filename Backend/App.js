const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');
const mongoose=require('mongoose');
const  Event=require('./models/event');
require('dotenv').config();
const port=process.env.PORT||8080;

const app = express();


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
   return Event.find().then((events)=>{
    return events.map(event=>{
      return{...event._doc,_id:event.id};
    })
   }).catch((error)=>{
    throw error;
   });
    },
    createEvent: args => {
      const event=new Event({
          title: args.eventInput.title,
          description: args.eventInput.description,
          price: +args.eventInput.price,
          date: new Date(args.eventInput.date)
      });
      return event.
      save()
      .then((resp)=>{
      console.log(resp);
      return {...resp._doc};
    }).catch((error)=>{
      console.log(error);
      throw error;
    });
    
    }
  },
  graphiql: true
})
);
mongoose.connect(process.env.MONGO_DATABASE_SRV)
.then(()=>{
  app.listen(port, () => console.log("=================> Wait until Project Build Finishes",'\n',"Congratulations Server started Successfully on port:",port,'/n',process.env.MONGO_DB));
}).catch(err=>{console.log(err)});


