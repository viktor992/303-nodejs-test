const express = require('express');
const models = require('./models');
const routes = require('./startup/routes');

async function run() {
  await models.sequelize.sync();
  const app = express();
  routes(app);
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
      console.log(`Listening on port ${port}...`); // eslint-disable-line
  });
}

run();
