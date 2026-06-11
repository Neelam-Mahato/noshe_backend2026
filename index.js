const env = require('dotenv');
const path = require('path');

const configPath = path.join(__dirname, 'src','config', '.env');
env.config({
    path: configPath
})

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
const server = http.createServer(app);

const userRoutes = require('./src/routes/index');
app.use('/api/event',userRoutes);
app.listen(port, ()=> console.log(`Server running on the port ${port}`))