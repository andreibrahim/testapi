const express =  require('express');
const dotenv =  require('dotenv');
const colors =  require('colors');
const morgan =  require('morgan');
const connectDB = require('./config/db');
dotenv.config({ path: './config/.env' });
connectDB();

const app =  express();

app.use(express.json())

const apitest = require('./routes/apitest');
const firebaseapi = require('./routes/firebaseapi');
const firebaseartd = require('./routes/rtdapi');
const filter = require('./routes/sorting');

app.use('/api/v1/apitest',
    apitest
);
app.use('/api/v1/firebaseapi',
    firebaseapi
);
app.use('/api/v1/rtdapi',
firebaseartd
);
app.use('/api/v1/filter',
filter
);

const PORT = process.env.PORT || 500;

app.listen(PORT, console.log("Server Running AHA"));