const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv');
const directoryName=__dirname;
env.config({
    path:`${directoryName}/config/.env`
})

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
const server = http.createServer(app);

const userRoutes = require('./src/routes/index');
app.use('/api/event',userRoutes);

app.listen(port, ()=> console.log(`Server running on the port ${port}`))