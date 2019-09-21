require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT

app.use(cors());

app.listen(port, () => {
    console.log(`Contract Bay server is running on port ${port}!`)
});