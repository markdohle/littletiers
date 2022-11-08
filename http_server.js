//---------add http server----------------------
/*
Node Platform Packages thru the NPM Registry
1. LowDB
2. Express

Functionality on the server, reading and writing from the database by accessing it through the client(browser) address bar and hitting the routs defined on the server.
*/

const express = require('express')
const app     = express();

var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

//---configure express to serve static files from public directory---
app.use(express.static('public'));

// init the data store
db.defaults({ posts: []}).write();

//read and list all the data stored in db.json
app.get('/data', function(req, res){
    res.send(db.get('posts').value());
});

// ------add post through browser address------
/*
test using:
curl http://localhost:3000/posts/ping/1/false
*/

app.get('/posts/:title/:id/:published', function(req, res){

    var post = {
        'id' : req.params.id,
        'title' : req.params.title,
        'published' : req.params.published,
    }
    //add the new object, "post" to db.json
    db.get('posts').push(post).write();
    console.log(db.get('posts').value());
    res.send(db.get('posts').value());

});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){

    // YOUR CODE

});

//----start express server-----
app.listen(3000, function(){
    console.log('Running on port 3000: localhost:3000')
})
