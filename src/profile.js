'use strict';

// const mongoose = require("mongoose");
// const Portfolio = require("./models/Portfolio.model");
// const WorkPortfolio = require("./models/WorkPortfolio.model");
// const PersonalProject = require("./models/PersonalProject.model");

module.exports.hello2 = async event => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'hello2',
      input: event,
    },
    null,
    2,
  ),
});

// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

module.exports.getPersonalProjects = async event => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'getPersonalProjects',
      input: event,
    },
    null,
    2,
  ),
});

module.exports.getPersonalProjectById = async event => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'getPersonalProjectById',
      input: event,
    },
    null,
    2,
  ),
});

module.exports.getWorkPortfolios = async event => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'getWorkPortfolios',
      input: event,
    },
    null,
    2,
  ),
});

module.exports.getWorkPortfolioById = async event => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'getWorkPortfolioById',
      input: event,
    },
    null,
    2,
  ),
});

module.exports.getPortfolios = async event => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'getPortfolios',
      input: event,
    },
    null,
    2,
  ),
});

module.exports.getPortfolioById = async event => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'getPortfolioById',
      input: event,
    },
    null,
    2,
  ),
});
