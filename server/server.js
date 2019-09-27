const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();
const port = process.env.PORT

//database config
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}, (error) => {
    if(!error) {
        console.log('Successfully connected to contract_baydb!')
    }
});

//server
app.listen(port, () => {
    console.log(`Contract Bay server is running on port ${port}!`)
});