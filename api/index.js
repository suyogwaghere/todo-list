require('dotenv').config();
const express = require('express');
const bodyParer = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.API_PORT;
app.use(cors());
app.use(bodyParer.json());
app.use(bodyParer.urlencoded({ extended: true }));

const mongoUrl = process.env.MongoDBUrl;

// Connect to MongoDB
mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error: ', err);
  });

// Routes
// app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
