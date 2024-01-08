require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const mainRoute = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// setting up server
const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(3000, () => {
            console.log(`Server is up and listening on ${port} ...`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();
