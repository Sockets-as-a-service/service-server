module.exports = function(app, options, methods){

    methods.sockets = {};
    methods.sockets.push = function(target, notification, type, callback){

        // this function will push to the right sockets you defined
        callback(1,2);
    };


    /**
     * listen on all open connections and make sure you can follow them, this is great since
     * we can create a custom handler for registration where we can catch the right application key
     */
    options.io.on('connection', function (socket) {

        // user connected on the socket, we kinda need the real data key here, else w're f*ckd
        socket.on('register', function(from, data){

            console.log(from);
            console.log(data);

        });


    });




}