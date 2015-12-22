/*
    These routes will handle everything that has anything to do with registering a new applications
    removing a application, editing the application or showing one or all applications.
 */
module.exports = function(app, options, methods){


    /**
     * Create a new application, applications are required to bind an user to something
     */
    app.post(
        '/application',
        function(req, res) {

            var hash = methods.hash(Date.now());

            // check if the body is present, this would be great to have ;)
            if (!req.body.name || req.body.name == ''){
                return methods.send(res, {message: 'No \'name\' defined'}, false);
            }

            var Application = options.models.Application,
                A = new Application({
                    Name: req.body.name,
                    Key: hash
                });

            A.save(function(err, data){
                if (err){
                    return methods.send(res, {message: err}, false);
                }
                return methods.send(res, data, true);
            });
        });


}