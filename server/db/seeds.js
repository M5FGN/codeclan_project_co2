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
    forename: 'Jim',
    surname: 'Halper',
    footprint: {
        commute: {
            car: 1000, 
            train: 300, 
            bus: null,
            cycling: null,
            walk: null,
            travelTotal: 1300
        },
        air: 1000, 
        diet: 400, 
        recycling: 760, 
        heating: 9500
    }},

    {username: 'Nard Dog',
    forename: 'Andrew',
    surname: 'Bernard',
    footprint: {
    commute: {
       car: null, 
       train: null, 
       bus: 600,
       cycling: null,
       walk: null,
       travelTotal: 600
    },
    air: 650, 
    diet: 300, 
    recycling: 650, 
    heating: 8500 
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
       walk: 2,
       travelTotal: 102
    },
    air: 2000, 
    diet: 400, 
    recycling: 650, 
    heating: 10000 
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
       travelTotal: 550
    },
    air: null, 
    diet: 250, 
    recycling: 300, 
    heating: 6000 
    }}
]);

db.figures.insertMany([
    {"emission_sources" : {
        "meat":
            {
            "meat": "1.5",
            "meat2": "3",
            "meat3": "4.5",
            "meat4": "6",
            "meat5": "7.5",
            "meat6": "9",
            "meat7": "10"
            },
        "transport":
            {
            "train": "0.024",
            "petrolcar":"0.18",
            "electriccar":"0.06",
            "taxi":"0.210",
            "motorbike":"0.115",
            "bus":"0.027",
            "cycling":"0.001",
            "walking":"0.0005"
            },
        "airtravel":
            {
            "airtime":"90"
            },
     
        "recycling":
            {
            "never_recycled":"1960",
            "some_recycled":"1372",
            "mostly_recycled":"784",
            "always_recycled":"392"
            },
        
        "gas":
            {
            "rooms_1":"1480",
            "rooms_2":"1942.5",
            "rooms_3":"2497.5",
            "rooms_4":"2867.5"
            },
        
        "electricity":
            {
            "rooms_1":"419.4",
            "rooms_2":"477.65",
            "rooms_3":"535.9",
            "rooms_4":"594.15"
            }
        }
    }
]);