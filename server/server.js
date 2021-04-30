const express = require ('express');
const app = express();

// const cors = require("cors");
// app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db('projectco2');
    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);
    app.use('/', usersRouter);
        // Previous example has this app.use as /api/bookings, and that determines what route we will access our DB at
        // We want it to be available right from our localhost route surely? so '/'

});

app.listen(5000, function() {
    console.log(`Project CO2 server running on port ${this.address().port}`)
});    
