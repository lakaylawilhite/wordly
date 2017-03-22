
var express = require("express");
var app = express();
var mysql = require("mysql")
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');

app.use(bodyParser());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ucfcodingbootcamp',
  database : 'final' // insert your sql database name here
});

app.use('/', serveStatic('./views', {'extensions': ['html']}));

app.post("/login", function(req, res, next){
  //connect with database, check login credentials
  var email = req.body.email;
    var password = req.body.password;
  connection.connect(function(err) {
      if (err) { console.log(err); }
        console.log('connection: ' + connection.threadId);
    });
  
  // run select queries
  // check for a user account, grab photos, etc
  connection.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`, function (error, result) {
    if (error) { throw error; res.redirect('/'); }
    // do the success thing
    next();
  });
   // insert statement- insert a new user, or add a url to a photo uploaded into a photos table, etc
   // connection.query("INSERT INTO users2 (email, password) VALUES ('ek@gmail.com', '12345')", function (error, result) {
   // if (error) throw error;
   // console.log(result);
   //});
  res.send({email: email, password: password});
    //assume login works for now;
  //res.sendFile("views/member.html");
});

app.use('/login', serveStatic('./views/member.html', {'extensions': ['html']}));

function loginUser(email, password) {

}



app.listen(3001);

console.log("app listening on port 3001");
