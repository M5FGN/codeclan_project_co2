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
    },
    air: null, 
    diet: 100, 
    recycling: 100, 
    heating: 6000 
    }}
]);

db.figures.insertMany([
    {meat:
        {
        meat: 1.5,
        meat2: 3,
        meat3: 4.5,
        meat4: 6,
        meat5: 7.5,
        meat6: 9,
        meat7: 10
        }
    },
    {"transport":
        {
        "train": "0.024",
        "petrolcar":"0.18",
        "electriccar":"0.06",
        "taxi":"0.210",
        "motorbike":"0.115",
        "bus":"0.027",
        "cycling":"0.001",
        "walking":"0.0005"
        }
        },
    {"airtravel":
        {
        "airtime":"90"
        }
    },
    {"recycling":
        {
        "never_recycled":"1960",
        "some_recycled":"1372",
        "mostly_recycled":"784",
        "always_recycled":"392"
        }
    },
    {"gas":
        {
        "rooms_1":"1480",
        "rooms_2":"1942.5",
        "rooms_3":"2497.5",
        "rooms_4":"2867.5"
        }
    },
    {"electricity":
        {
        "rooms_1":"419.4",
        "rooms_2":"477.65",
        "rooms_3":"535.9",
        "rooms_4":"594.15"
        }
    }
]);