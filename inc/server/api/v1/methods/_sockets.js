module.exports = function(app, options, methods){

    methods.sockets = {};
    methods.sockets.push = function(target, notification, type, callback){

        callback(1,2);
    };




}