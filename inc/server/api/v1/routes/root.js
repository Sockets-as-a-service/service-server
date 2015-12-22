module.exports = function(app, options){

    app.get('/', function(req, res){
        var routePaths = {};
        app._router.stack.forEach(function(details){
            var route = details.route;
            if(route && route.path !== '/'){
                routePaths[route.path] = route.methods;
            }
        });
        res.json(routePaths);
    });

};
