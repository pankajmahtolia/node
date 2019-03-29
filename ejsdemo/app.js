var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


var friends = ["Subodh","Ankit","Akhilesh","Shivam"];

app.get('/', function(req,res){
   res.render('home.ejs'); 
});
app.get('/animals/:animals', function(req,res){
    var animal = req.params.animals;
    res.render('animal.ejs', {ejsanimal: animal}); 
});

app.get('/post', function(req,res){
   var posts = [
       { title: "Yo Yo Honey Singh", author: "Honey Singh"},
       { title: "Jai Shri Ram", author: "Pramod Dubey Allahabad"},
       { title: "To kese hai app log", author: "Carry Minati"},
 ];
 
 res.render('posts.ejs', {ejspost: posts});

});

app.post('/addFriend', function(req,res){
   var newFriend = req.body.newFriend;   
   friends.push(newFriend);
   res.redirect('/friends');
   
});

app.get('/friends', function(req,res){
   res.render("friends.ejs", {friends: friends});
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});