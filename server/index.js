const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const bodyParser = require('body-parser');

const rentalRoutes = require('./routes/rentals');
const userRoutes = require('./routes/users');

mongoose.connect(config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

const app = express();

app.use(bodyParser.json());
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('The server is running on PORT 3001');
})

