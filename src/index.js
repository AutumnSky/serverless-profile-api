'use strict';

// this only for local server running
import { app } from './handler';

app.listen(process.env.PORT, () => {
  console.log(`Serverless running on http://localhost:${process.env.PORT}`);
});
