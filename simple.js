var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
// YOUR CODE

//-----Set Defaults--------
db.defaults({posts:[]}).write();

//----------add post, push properties--------
db.get('posts')
    .push({ id: 3, title: 'resentment', published: true})
    .write()
db.get('posts')
    .push({ id: 6, title: 'revenge', published: true})
    .write()
db.get('posts')
    .push({ id: 4, title: 'gratitude', published: true})
    .write()
db.get('posts')
    .push({ id: 5, title: 'love', published: true})
    .write()

//-------Read data back to terminal----
console.log(db.get('posts').value());

// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
