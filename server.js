var express = require('express');
var app = express();

var firebase = require("firebase");
var BodyParser = require("body-parser");

var config = {
        apiKey: "AIzaSyA8nkxbEk7by1ZR9jzMSvW5cVFwgwYMt6c",
        authDomain: "bc-22-weatherforecastapp.firebaseapp.com",
        databaseURL: "https://bc-22-weatherforecastapp.firebaseio.com",
        projectId: "bc-22-weatherforecastapp",
        storageBucket: "bc-22-weatherforecastapp.appspot.com",
        messagingSenderId: "994611442270"
    };

    firebase.initializeApp(config);

app.use(BodyParser.json());

app.use(BodyParser.urlencoded({extended:true}));

app.post('/index',function(req, res){

var email = req.body.email ;
var pass = req.body.password;
const auth = firebase.auth();
const promise = auth.signInWithEmailAndPassword(email, pass);
promise.catch(e=>console.log(e.message));

});









// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
