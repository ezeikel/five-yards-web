const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');

// create our Express app
const app = express();

app.use(morgan('dev'));

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app, path: '/graphql' });

app.use('/public', express.static(path.join(__dirname, '/public')));

app.use(express.static('client/build'));

// express will serve up index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

module.exports = app;