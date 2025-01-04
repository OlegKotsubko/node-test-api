require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routers = require('./router/index');

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(cors());
app.use('/api', routers);

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    })
  } catch (e) {
    console.error(e);
  }
}

start();

