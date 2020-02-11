const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
/*  */
const collectionName = 'friends'
const databaseName = 'links'

// Use connect method to connect to the server
// second parameter is a callback function
MongoClient.connect(url, {useUnifiedTopology: true}, onConnect)

async function onConnect(err, client) {
  console.log("Connected successfully to server");

  const db = client.db(databaseName);

  // look at the documentation
  // https://mongodb.github.io/node-mongodb-native/3.4/api/Db.html#collection

  // create Collection object
  const collectionFriends = db.collection(collectionName);
  
  // insert document
  await collectionFriends.insertOne({"name":"leo"})

  // get array of documents from collection
  let findResult = await collectionFriends.find()
  let findResultArray = await findResult.toArray()

  // log array
  console.log("insert document, result is: ",findResultArray)

  // delete document
  await collectionFriends.deleteOne({"name": "leo"})

  // CODE HERE get array of documents from collection
  findResult= await collectionFriends.find()
  findResultArray = await findResult.toArray()
  console.log("deleted document, result is: ",findResultArray)
  // CODE HERE get array of documents from collection

  // log array
  console.log("deleted document, result is: ",findResultArray)// CODE HERE log array

}

// you had this 

/*
missing something but what?
notice the return type of toArray -> https://mongodb.github.io/node-mongodb-native/3.4/api/Cursor.html#toArray
is a Promise, which means it's async
  findResult= await collectionFriends.find()
  findResultArray = await findResult.toArray()
  console.log("deleted document, result is: ",findResultArray)
  */