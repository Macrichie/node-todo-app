const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e);
// });

Todo.findOneAndRemove({_id: "5aba8526c9147116d895f74b" }).then((todo) => {

});

Todo.findByIdAndRemove("5aba8526c9147116d895f74b").then((todo) => {
    console.log(todo)
});