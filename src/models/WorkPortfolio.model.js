const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  company: String,
  projectName: {
    type: {
      ko: String,
      en: String,
    },
  },
  year: Number,
  from: String,
  to: String,
  role: [String],
  using: [String],
  participation: Number,
  link: {
    type: {
      iOS: String,
      Android: String,
      web: String,
    },
  },
  screenshot: [String],
});

global.WorkPortfolio = global.WorkPortfolio || mongoose.model('WorkPortfolio', schema);

module.exports = global.WorkPortfolio;
