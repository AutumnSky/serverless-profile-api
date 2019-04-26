'use strict';

import express from 'express';
import serverless from 'serverless-http';
import mongoose from 'mongoose';
import Portfolio from './models/Portfolio.model';
import PersonalProject from './models/PersonalProject.model';
import WorkPortfolio from './models/WorkPortfolio.model';

require('dotenv').config();

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
const serverlessApp = serverless(app);

const sendError = (res, e) => {
  res.json({
    error: e.message,
  });
};

app.get('/', (req, res) => {
  res.send('hello world 😀');
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

export {
  app,
  serverlessApp,
};
