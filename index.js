const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
app.use(cors());
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('mongo connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log('backend running');
});
