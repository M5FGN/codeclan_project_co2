const express = require ('express');
const app = express();

const cors = require("cors");
app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db('projectco2');
    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);
    app.use('/users', usersRouter);
});

// We need another database connected to grab our API data
// Same structure as above, but for app.use('/api') ? 
// And a different port

app.listen(5000, function() {
    console.log(`Project CO2 server running on port ${this.address().port}`)
});    
