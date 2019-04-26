'use strict';

import express from 'express';
import serverless from 'serverless-http';
import mongoose from 'mongoose';
import routes from './routes';

require('dotenv').config();

let connection = null;

const connect = () => {
  console.log('[log] try connect');
  if (connection && mongoose.connection.readyState === 1) {
    console.log('[log] already connected');
    return Promise.resolve(connection);
  }
  console.log('[log] new connection');
  return mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }).then(
    (conn) => {
      connection = conn;
      return connection;
    },
  );
};

const app = express();
const serverlessApp = serverless(app);

// middlewares
app.use('/', async (req, res, next) => {
  try {
    await connect();
    next();
  } catch (e) {
    console.log('error', e);
    res.json(e);
  }
});

// routes
routes(app);

export {
  app,
  serverlessApp,
};
