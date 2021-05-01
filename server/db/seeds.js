use projectco2;

db.dropDatabase();

// This DB is an array of User objects
// A User has a username, forename, surname, and a footprint object
// A footprint object has a Commuting object with car, train, cycling..
// Footprint object then has single key value pairs for air miles, diet, recycling etc..

// All values below are in units of kg CO2 per year
// Four example users are here for our trials/testing

db.users.insertMany([
    {username: 'Bigtuna',
        // This will be used for our list, comparison, or future login option
    forename: 'Jim',
    surname: 'Halper',
    footprint: {
        commute: {
            car: 1000, 
                //Calculated from miles per day * CO2/mile,  * 365
                // user.footprint.commute.car
            train: 500, 
                // As above
                // user.footprint.commute.train
            bus: null,
            cycling: null,
            walk: null,
            total: 1500
                // If we want to display a total 'Commuting CO2'
                // user.footprint.commute.total
        },
        air: 1000, 
            // Calculated from hours in air * CO2/hr
            // user.footprint.air
        diet: 1000, 
            // Calculated from "x amount of a week = this CO2", * 52 weeks
            // user.footprint.diet
        recycling: 500, 
            // user.footprint.recycling
        heating: 1000 
            // user.footprint.heating
    }},

    {username: 'Nard Dog',
    forename: 'Andrew',
    surname: 'Bernard',
    footprint: {
    commute: {
       car: null, 
       train: null, 
       bus: 400,
       cycling: null,
       walk: null,
       total: 400
    },
    air: 20, 
    diet: 10000, 
    recycling: 2000, 
    heating: 4000 
    }},

    {username: 'Beesly',
    forename: 'Pam',
    surname: 'Beesly',
    footprint: {
    commute: {
       car: null, 
       train: null, 
       bus: 100,
       cycling: null,
       walk: 20,
       total: 120
    },
    air: 2000, 
    diet: 6000, 
    recycling: 500, 
    heating: 3000 
    }},

    {username: 'Plop',
    forename: 'Pete',
    surname: 'Miller',
    footprint: {
    commute: {
       car: null, 
       train: 500, 
       bus: null,
       cycling: 50,
       walk: null,
       total: 550
    },
    air: null, 
    diet: 100, 
    recycling: 100, 
    heating: 6000 
    }}
]);