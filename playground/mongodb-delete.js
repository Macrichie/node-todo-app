const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo-App', (err, client) => {    
    if(err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Todo-App');

    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete todo', err);
    // });

    // db.collection('Todos').deleteOne({text: "Something to do"}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete todo', err);
    // });

    // db.collection('Todos').findOneAndDelete({complete: false}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: "Olakunle Makanjuola"}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete user', err);
    // });

    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("5ab3e00362b0af01685c5137")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

});