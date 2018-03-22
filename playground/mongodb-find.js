//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo-App', (err, client) => {    
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Todo-App');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5ab3e2eaf202271c50f9f400")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch docs', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to count todos', err);
    // });
    db.collection('Users').find().toArray().then((user) => {
        console.log('Users');
        console.log(JSON.stringify(user, undefined, 2));
    }, (err) => {
        console.log('Unable to find users', err);
    });

    //client.close();
});