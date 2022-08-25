const express = require('express');
const cors = require('cors');
const app = express();

const contactsRouter = require('./routes/contacts.route.js');

app.use(express.json());
app.use(cors());

app.use('/contacts', contactsRouter);

app.get('/', (request, response) => {
    response.json({
        message: 'Server running...'
    });
});

module.exports = app;
