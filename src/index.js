'use strict';

import { app } from './handler';

app.listen(3000, () => {
  console.log('Serverless running on http://localhost:3000');
});
