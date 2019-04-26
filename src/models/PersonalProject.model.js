import mongoose from 'mongoose';

const schema = new mongoose.Schema({
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

global.PersonalProject = global.PersonalProject || mongoose.model('PersonalProject', schema);

export default global.PersonalProject;
