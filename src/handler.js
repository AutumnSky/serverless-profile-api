'use strict';

require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const Portfolio = require('./models/Portfolio.model');
const PersonalProject = require('./models/PersonalProject.model');
const WorkPortfolio = require('./models/WorkPortfolio.model');

let connection = null;

const connect = () => {
  console.log('dburl', process.env.DB_URL);
  if (connection && mongoose.connection.readyState === 1) return Promise.resolve(connection);
  return mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }).then(
    (conn) => {
      connection = conn;
      return connection;
    },
  );
};

const app = express();

const sendError = (res, e) => {
  res.json({
    error: e.message,
  });
};

app.get('/hello', (req, res) => {
  res.send('hello me');
});

app.get('/portfolios', async (req, res) => {
  try {
    await connect();
    const result = await Portfolio.find({});
    res.json(result);
  } catch (e) {
    sendError(e);
  }
});

module.exports = {
  app,
  serverless: serverless(app),
};
