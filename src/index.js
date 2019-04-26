'use strict';

const { app } = require('./handler');

app.listen(3000, () => {
  console.log('Serverless running on http://localhost:3000');
});
