const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// routes
const javascriptRoute = require('./routes/JavaScript');
const userRoute = require('./routes/user');

const cors = require('cors');
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('mongo connected');
  })
  .catch((err) => {
    console.log(err);
  });

//   Routes
app.use('/api/javascript', javascriptRoute);
app.use('/api/user', userRoute);

app.listen(PORT, () => {
  console.log(`backend running on ${PORT}`);
});
