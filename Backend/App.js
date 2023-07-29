const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');
const mongoose=require('mongoose');
const  Event=require('./models/event');
const User=require('./models/user');
const bcrypt=require('bcryptjs');
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
      type User {
        _id: ID!
        email: String!
        password: String
      }

      input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
      }
      input UserInput {
        email: String!
        password: String!
      }

      type RootQuery {
          events: [Event!]!
      }

      type RootMutation {
          createEvent(eventInput: EventInput): Event
          createUser(userInput: UserInput): User
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
    
    },
    createUser: args => {
      return User.findOne({ email: args.userInput.email })
        .then(user => {
          if (user) {
            throw new Error('User exists already.');
          }
          return bcrypt.hash(args.userInput.password, 12);
        })
        .then(hashedPassword => {
          const user = new User({
            email: args.userInput.email,
            password: hashedPassword
          });
          return user.save();
        })
        .then(result => {
          return { ...result._doc, password: null, _id: result.id };
        })
        .catch(err => {
          throw err;
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


