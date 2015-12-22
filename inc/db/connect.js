'use strict';

module.exports = function(mongoose, mongoUri){

    //mongoUri is: mongodb://hostname:port/dbName
    var dbUrl = mongoUri;

    //Connect to mongoose
    mongoose.connect(dbUrl);

    var db = mongoose.connection;

    //listen on connection error and success
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function(){
        console.log('Connected to '+dbUrl);
    });

};
