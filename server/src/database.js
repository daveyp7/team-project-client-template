// Your startup's initial mock objects go here
var initialData = {


    //  User information
    "users":{
      // This user (our default user) has id "1"
      "1":{
        "_id":1,
        "username": "LingoDaddy42",
        "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
        "highlights": 4,
        "name": "Lingo A'Daddy",
        "gender": "Helicopter",
        "sports": ["muy thai","baseball","water polo"],
        "skillLvl": ["Novice", "Intermediate", "Advanced"],
        "age": "79",
        "games":[4,5], //an array/list of the games that a user has. In the form of the Game ID #s
        "suggestedgames":[1,2,3], //an arrayList of the games that are suggested for the user to participate in by Game ID
        "schdeule":[1], // The schdeule uses the users ID# to fill/list the events
        "leagues":[1], // The list of leagues the user is associated with, by refernce of the league ID#
        "msgThread":[]/* List of message Items specific to user-user conversation*/
      },
      "2":{
        "_id":2,
        "username": "BroDaddy901",
        "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
        "name": "Brosidan Daddy",
        "highlights": 4,
        "gender": "Tractor",
        "sports": ["muy thai","baseball","water polo"],
        "skillLvl": ["Novice", "Intermediate", "Advanced"],
        "age": "24",
        "games":[4], //an array/list of the games that a user has. In the form of the Game ID #s
        "suggestedgames":[1,2,3], //an arrayList of the games that are suggested for the user to participate in by Game ID
        "schdeule":[1], // The schdeule uses the users ID# to fill/list the events
        "leagues":[2], // The list of leagues the user is associated with, by refernce of the league ID#
        "msgThread":[]/* List of message Items specific to user-user conversation*/
      },
      "3":{
        "_id":3,
        "username": "FuriousSquirrel4500",
        "profilepicture": "img/middle-aged-bowler.jpg",
        "name": "Paul Lactose",
        "highlights": 4,
        "gender": "Male",
        "sports": ["running","water polo", "basketball"],
        "skillLvl": ["Advanced", "Intermediate", "Advanced"],
        "age": "42",
        "games":[5,6], //an array/list of the games that a user has. In the form of the Game ID #s
        "suggestedgames":[1,2,3], //an arrayList of the games that are suggested for the user to participate in by Game ID
        "schdeule":[1], // The schdeule uses the users ID# to fill/list the events
        "leagues":[1,2], // The list of leagues the user is associated with, by refernce of the league ID#
        "msgThread":[]/* List of message Items specific to user-user conversation*/
      },
      "4":{
        "_id":4,
        "username": "donnydad",
        "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
        "highlights": 4,
        "name": "Elrond Hubbard",
        "gender": "Space Alien",
        "sports": ["soccer"],
        "skillLvl": ["Advanced"],
        "age": "24",
        "games":[4], //an array/list of the games that a user has. In the form of the Game ID #s
        "suggestedgames":[1,2,3], //an arrayList of the games that are suggested for the user to participate in by Game ID
        "schdeule":[1], // The schdeule uses the users ID# to fill/list the events
        "leagues":[5], // The list of leagues the user is associated with, by refernce of the league ID#
        "msgThread":[]/* List of message Items specific to user-user conversation*/
      },
      "5":{
        "_id":5,
        "username": "FuriousBallWoman",
        "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
        "name": "Brenda Fiddlebiscuits",
        "highlights": 4,
        "gender": "Female",
        "sports": ["curling"],
        "skillLvl": ["Beginner"],
        "age": "102",
        "games":[3], //an array/list of the games that a user has. In the form of the Game ID #s
        "suggestedgames":[1,2,4], //an arrayList of the games that are suggested for the user to participate in by Game ID
        "schdeule":[1], // The schdeule uses the users ID# to fill/list the events
        "leagues":[1], // The list of leagues the user is associated with, by refernce of the league ID#
        "msgThread":[]/* List of message Items specific to user-user conversation*/
      }
    },
    // League information
     "leagues" : {
       // Example League listing, this league has id "1"
       "0":{
         "_id":0,
         "leagName": "This is an Independent Event",
         "picture": "img/lingodaddy_profile_pic_userhub.jpg",
         "currentUsername": "a",
         "status": "",
         "memCount": "5",
         "admin": "", // a specific user
         "adminnum": 1,
         "sports":[],
         "skill":[],
         "members":[], // store the list of members as the User ID's, that way easy to pass/use information about the members
         "games":[],// List of the games associated with the league, uses game ID# reference
         "dates":[],
         "times":[],
         "locations":[],
         "description": ""
       },
       "1":{
         "_id":1,
         "leagName": "Not New to Sports",
         "picture": "img/middle-aged-bowler.jpg",
         "currentUsername": "Bingomommy512",
         "status": "Open",
         "memCount": "209",
         "admin": "LingoDaddy42", // a specific user
         "adminnum": 1,
         "sports":["dodgeball","synchronized swimming"],
         "skill":["Novice","Intermediate"],
         "members":["Carlos390", "OGLingo", "Calvin", "The_mIddlE_AGEd_Bowl3R", "Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
         "games":["Walking", "Running", "Swimming", "Jogging"],// List of the games associated with the league, uses game ID# reference
         "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
         "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
         "locations":["Puffers Pond", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
         "description": "This is a sample description for a league page"
       },
       "2":{
         "_id":2,
         "leagName": "Middle Aged Bowlers",
         "picture": "img/middle-aged-bowler.jpg",
         "currentUsername": "FuriousBallWoman",
         "status": "Closed",
         "memCount": "696",
         "admin": "LingoDaddy42", // a specific user
         "adminnum": 1,
         "sports":["bowling","walking", "running", "hockey", "frisbee"],
         "skill":["Novice", "Beginner", "Beginner- Advanced", "Advanced", "Novice"],
         "members":["Carlos390", "OGLingo", "Calvin", "The_mIddlE_AGEd_Bowl3R", "Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
         "games":["Walking", "Running", "Swimming", "Jogging"],// List of the games associated with the league, uses game ID# reference
         "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
         "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
         "locations":["Not Puffers", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
         "description": "This is a sample description for another different league page"

       },

       "3":{
         "_id":3,
         "leagName": "Jesuit Club of Birmingham Alabama",
         "picture": "img/middle-aged-bowler.jpg",
         "currentUsername": "JesusFreak4210",
         "status": "Open",
         "memCount": "2",
         "admin": "LingoDaddy42", // a specific user
         "adminnum" : 1,
         "sports":["bowling","walking", "running", "ultimate frisbee"],
         "skill":["Novice", "Beginner", "Beginner- Advanced"],
         "members":["Carlos390", "OGLingo", "Calvin", "The_mIddlE_AGEd_Bowl3R", "Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
         "games":["Walking", "Running", "Swimming", "Jogging"],// List of the games associated with the league, uses game ID# reference
         "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
         "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
         "locations":["Puffers Pond", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
         "description": "ent league page This is a sample description for another different league page v This is a sample description for another different league page ent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league page"
     },
     "4":{
       "_id":4,
       "leagName": "Runners club of alberta",
       "picture": "img/middle-aged-bowler.jpg",
       "currentUsername": "Jaxon",
       "status": "Open",
       "memCount": "4",
       "admin": "LingoDaddy42", // a specific user
       "adminnum": 1,
       "sports":["bowling","walking", "swimming", "four square"],
       "skill":["Novice", "Beginner", "Beginner", "Advanced"],
       "members":["Carlos390", "OGLingo", "Calvin", "Not Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
       "games":["walking", "running", "swimming", "jogging"],// List of the games associated with the league, uses game ID# reference
       "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
       "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
       "locations":["Puffers Pond", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
       "description": "ent league page This is a sample description for another different league page v This is a sample description for another different league page ent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league page"
   },
   "5":{
     "_id":5,
     "leagName": "Not American Sports",
     "picture": "img/middle-aged-bowler.jpg",
     "currentUsername": "PancakeBilly65",
     "status": "Open",
     "memCount": "4",
     "admin": "LingoDaddy42", // a specific user
     "adminnum": 1,
     "sports":["soccer"],
     "skill":["Novice"],
     "members":["Carlos390", "OGLingo", "Calvin", "Not Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
     "games":["soccer Game 1", "soccer Game 2", "soccer Game 3", "Last soccer Game"],// List of the games associated with the league, uses game ID# reference
     "dates":["June 1st 2018", "June 29th 2018", "July 2nd 2017", "July 8th 2017"],
     "times":["4:00PM EST", "5:00PM EST", "4:30PM EST", "9:00PM EST"],
     "locations":["Puffers Pond", "Puffers Pond", "Puffers Pond", "Mullins Center"],
     "description": "We do soccer. Not Football. Ever."
  },
  "6":{
    "_id":6,
    "leagName": "American Sports",
    "picture": "img/hulk-hogan-usa-flag.jpg",
    "currentUsername": "CupcakeBilly65",
    "status": "Open",
    "memCount": "1",
    "admin": "LingoDaddy4233", // a specific user
    "adminnum": 1,
    "sports":["football"],
    "skill":["Novice"],
    "members":["LingoDaddy4233"], // store the list of members as the User ID's, that way easy to pass/use information about the members
    "games":["Game1", "Game2", "Game3", "Big Ol' Game"],// List of the games associated with the league, uses game ID# reference
    "dates":["February 2nd 2018", "March 2nd 2018", "May 2 2017", "July 8 2017"],
    "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
    "locations":["Umass Amherst Campus", "Umass Amherst Campus", "Route 9", "Umass Amherst Campus"],
    "description": "We do football. Not soccer. Ever."
  },

  "7":{
    "_id":7,
    "leagName": "British Sports",
    "picture": "img/jogger.jpg",
    "currentUsername": "dringo",
    "status": "Closed",
    "memCount": "19302",
    "admin": "LingoDaddy4233", // a specific user
    "adminnum": 1,
    "sports":["tea drinking"],
    "skill":["Advanced"],
    "members":["LingoDaddy4233"], // store the list of members as the User ID's, that way easy to pass/use information about the members
    "games":["Game1", "Game2", "Game3", "Big Ol' Game"],// List of the games associated with the league, uses game ID# reference
    "dates":["February 2nd 2018", "March 2nd 2018", "May 2 2017", "July 8 2017"],
    "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
    "locations":["Umass Amherst Campus", "Umass Amherst Campus", "Route 9", "Umass Amherst Campus"],
    "description": "We like to drink tea. Sometimes. Okay all the time"
  },

  "8":{
    "_id":8,
    "leagName": "American Sports",
    "picture": "img/jogger.jpg",
    "currentUsername": "CupcakeBilly65",
    "status": "Open",
    "memCount": "1",
    "admin": "LingoDaddy4233", // a specific user
    "adminnum": 1,
    "sports":["football"],
    "skill":["Novice"],
    "members":["LingoDaddy4233"], // store the list of members as the User ID's, that way easy to pass/use information about the members
    "games":["Game1", "Game2", "Game3", "Big Ol' Game"],// List of the games associated with the league, uses game ID# reference
    "dates":["February 2nd 2018", "March 2nd 2018", "May 2 2017", "July 8 2017"],
    "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
    "locations":["Umass Amherst Campus", "Umass Amherst Campus", "Route 9", "Umass Amherst Campus"],
    "description": "We do football. Not soccer. Ever."
  }
   },
    "games": {
      "0": {
        "_id": 0,
        "gameName": "No Game Data",
        "description": "This Game Does Not Exist",
        "location": "N/A",
        "date": "N/A",
        "time": "N/A",
        "currPlayers": [],
        "maxPlayers": 0,
        "minAge": 0,
        "maxAge": 0,
        "sport": "N/A",
        "skillLvl": "N/A",
        "league": "N/A",
        "leagueid":0
      },
      "1": {
        "_id": 1,
        "gameName": "Not American Football",
        "description": "Not American Football welcomes all people who want to play Fùtbol... except for people who are really good.",
        "location": "Amherst, MA",
        "date": "5/15/17",
        "time": "6:30 PM",
        "currPlayers": [1],
        "maxPlayers": 20,
        "minAge": 16,
        "maxAge": 30,
        "sport": "soccer",
        "skillLvl": "Novice",
        "league": "Not American Sports",
        "leagueid":5
      },
      "2": {
        "_id":2,
        "gameName": "Not European Football",
        "description":"Grid Iron Football is the greatest sport of all time, hands down! None of that spherical ball stuff, all about the hand egg!",
        "location":"Hadley, MA",
        "date": "5/20/17",
        "time": "10:30 AM",
        "currPlayers": [5],
        "maxPlayers": 30,
        "minAge": 20,
        "maxAge": 28,
        "sport":"football",
        "skillLvl": "Advanced",
        "league":"American Sports",
        "leagueid": 6
      },
      "3":{
        "_id":3,
        "gameName": "New to Curling",
        "description":"Want to learn to play the traditional Olympic sport of Canada, come to Eashampton and we can learn together!",
        "location":"Easthampton, MA",
        "date": "5/22/17",
        "time": "7:00 PM",
        "currPlayers": [3,5,6,7],
        "maxPlayers": 4,
        "minAge": 35,
        "maxAge": 50,
        "sport":"curling",
        "skillLvl": "Beginner",
        "league":"Independent",
        "leagueid": 0
      },
      "4":{
        "_id":4,
        "gameName": "Senior Fight Night",
        "description":"Get together and spar your friends, neighbors, and loved ones!",
        "location":"Northampton, MA",
        "date": "5/9/17",
        "time": "1:00 AM",
        "currPlayers": [3,5,6,7],
        "maxPlayers": 4,
        "minAge": 50,
        "maxAge": 75,
        "sport":"muy thai",
        "skillLvl": "Novice",
        "league":"Independent",
        "leagueid": 0
      },
      "5":{
        "_id":5,
        "gameName": "Water Polo Throwdown",
        "description":"Everyone is welcome to come play some polo... IN A POOL!",
        "location":"Boston, MA",
        "date": "5/7/17",
        "time": "6:00 AM",
        "currPlayers": [3,5,6,7],
        "maxPlayers": 4,
        "minAge": 1,
        "maxAge": 99,
        "sport":"water polo",
        "skillLvl": "Beginner",
        "league":"Independent",
        "leagueid": 0
      }
    },
    "highlightsItems": {
      "1": {
        "_id": 4,
        "rsvpCounter": [3,5],
        "type": "highlightsUpdate",
        "contents": {
          "user": 4,
          "timestamp": 1453668480000,
          "location": "Northampton, MA",
          "contents": "League of Games is pleased to let everyone know that we will be having our first soccer game of the season this Saturday @ 6:00pm in the Southwest fields."
        },
        // List of comments on the post
        "comments": [
          {
            // The user of the comment.
            "user": 3,
            // The contents of the comment.
            "contents": "Hope no one comes!",
            // The date the comment was posted.
            // 01/24/16 22:00 EST
            "timestamp": 1453690800000
          },
          {
            "user": 5,
            "contents": "#rekt",
            "timestamp": 1453690800000
          }
        ]
      }
    },
      // "highlgihts" collection. Highlights for each FB user.
      "highlights": {
        "1":{
          "_id": 1,
          "contents": [1]
        },
        "4": {
          "_id": 4,
          // Listing of highlgihtsItems in the highlights.
          "contents": [1]
        }
      }
};

var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
  path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = require('./database.json');
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), { encoding: 'utf8' });
    updated = false;
  }
}, 200);
