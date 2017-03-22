function login(email, password, callback) {
  var connection = mysql({
    host: 'localhost',
    user: 'me',
    password: 'ucfcodingbootcamp',
    database: 'final'
  });


.then( function( response ){
          // Based on my imagination of what the /check-user response might look like
          if( response.success ){
            // Navigate to the authenticated app page
            window.location.replace( "/views/members.html" )
          }
          // Return the reason the user couldn"t be authenticated
          else {
            return response.errorMessage("Could not log you in please try again!")
          }
        } )
        // Populate our model with results
        .then( ctrl.error );
    }
  },








  connection.connect();

  var query = "SELECT id,  email, password " +
    "FROM users WHERE email = ?";

  connection.query(query, [email], function (err, results) {
    if (err) return callback(err);
    if (results.length === 0) return callback(new WrongUsernameOrPasswordError(email));
    var user = results[0];

    bcrypt.compare(password, user.password, function (err, isValid) {
      if (err) {
        callback(err);
      } else if (!isValid) {
        callback(new WrongUsernameOrPasswordError(email));
      } else {
        callback(null, {
          id: user.id.toString(),
          nickname: user.nickname,
          email: user.email
        });
      }
    });

  });
}







module.exports = function(login) {

    app.post("/member", function(req, res) {
            
        var data = req.body;

        data.companyId = req.params.companyId;

        console.log(data)

        db.member.create(data).then(function(dbmember) {
            res.redirect("/member");
        });
    });

}