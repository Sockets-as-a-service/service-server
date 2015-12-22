module.exports = function(passport, options){

	var CustomStrategy = require('passport-custom');

    /**
     *
     */
	passport.use('api_token', new CustomStrategy(
  		function(req, done) {

  		}
	));

    /**
     *
     */
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    /**
     *
     */
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

};
