const MongoClient = require('mongodb').MongoClient; //this file will save and load from the database 
module.exports = {}

const url = 'mongodb://localhost:27017';
let collectionLinks 
const collectionName = 'userLinks'
const databaseName = 'links'
/*
function saveUserData(url,email){
  let findResult = await collectionLinks.find({email:email})
  let findResultArray = await findResult.toArray()
  if(findResultArray.length){
    var newValue = {$push: {email:email, url:url}}
    collectionLinks.update()
  }


}*/
 function insertDocument(url, email){
  
  collectionLinks.insertOne({email:email,url:url})
}
function loadUserData(){

}
// Use connect method to connect to the server
// second parameter is a callback function
MongoClient.connect(url, {useUnifiedTopology: true}, onConnect)

async function onConnect(err, client) {
  console.log("Connected successfully to server");
    console.log("***********************************************",err);

  const db = client.db(databaseName);

  // look at the documentation
  // https://mongodb.github.io/node-mongodb-native/3.4/api/Db.html#collection

  // create Collection object
  collectionLinks = db.collection(collectionName);
  insertDocument('bob@gmail.com');
  console.log(collectionLinks.find({email:"bob@gmail.com"}))

  let findResult = await collectionLinks.find({email:email})
  let findResultArray = await findResult.toArray()
  console.log(findResultArray);
  /*
  // insert document
  await collectionLinks.insertOne({"email":req.body})

  // get array of documents from collection
  let findResult = await collectionLinks.find()
  let findResultArray = await findResult.toArray()
  // log array
  console.log("insert document, result is: ",findResultArray)

  // delete document
  await collectionLinks.deleteOne({"name": "leo"})

  // CODE HERE get array of documents from collection
  findResult= await collectionLinks.find()
  findResultArray = await findResult.toArray()
  console.log("deleted document, result is: ",findResultArray)
  // CODE HERE get array of documents from collection

  // log array
  console.log("deleted document, result is: ",findResultArray)// CODE HERE log array
*/
}