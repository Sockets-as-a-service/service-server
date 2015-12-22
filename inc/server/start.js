'use strict';

module.exports = function(options){

    var app = options.express(),
        server = options.http.Server(app),
        io = options.io(server);

    server.listen(options.port);
    console.log('Listening on 127.0.0.1:'+options.port);

    return {io: io, app: app};

};
