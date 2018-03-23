//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo-App', (err, client) => {    
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Todo-App');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     complete: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });
    
    db.collection('Users').insert({
        name: 'Olakunle Makanjuola',
        age: 45,
        location: 'Lisbon'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to connect', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});