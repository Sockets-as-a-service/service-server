module.exports = function(app, options, methods){

    methods.get = function(mainParams, callback){

        var http = require('https');
        var request = http.request( mainParams,
            function(response){
                response.setEncoding('utf8');
                var data = '';
                response.on('data', function(d) {
                    data += d;
                });
                response.on('end', function(){
                    var resData = JSON.parse(data);
                    callback(resData);
                });
            })
        request.write('');
        request.end();

    }

    methods.post = function(mainParams, data, callback){

        var http = require('https');
        var request = http.request( mainParams,
            function(response){
                response.setEncoding('utf8');
                var data = '';
                response.on('data', function(d) {
                    data += d;
                });
                response.on('end', function(){
                    var resData = JSON.parse(data);
                    callback(resData);
                });
            })
        request.write(JSON.stringify(data));
        request.end();

    }

}
