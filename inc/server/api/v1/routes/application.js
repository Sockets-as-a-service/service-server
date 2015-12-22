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


    /**
     * Get all application
     */
    app.get(
        '/application',
        function(req,res){
            options.models.Application.find({},
                function(err, data){
                    if (err){
                        return methods.send(res, {message: err}, false);
                    }
                    return methods.send(res, data, true);
                });
        });

    /**
     * Get one application by it's unique _id
     */
    app.get(
        '/application/:id',
        function(req,res){
            options.models.Application.findById(req.params.id,
                function(err, data){
                    if (err){
                        return methods.send(res, {message: err}, false);
                    }
                    return methods.send(res, data, true);
                });
        });


    /**
     * Get all applications with the same key, 99% only one, but just in case a normal
     * find() instead of a findOne()
     */
    app.get(
        '/application/key/:key',
        function(req,res){
            options.models.Application.find(
                {'Key': req.params.key},
                function(err, data){
                    if (err){
                        return methods.send(res, {message: err}, false);
                    }
                    return methods.send(res, data, true);
                });
        });

    /**
     * Removes an entity, only available through _id, no need to do this by token
     */
    app.delete(
        '/application/:id',
        function(req, res){
            options.models.Application.findById(req.params.id)
                .remove()
                .exec(function(err, data){
                    if (err){
                        return methods.send(res, {message: err}, false);
                    }
                    return methods.send(res, data, true);
                });
        }
    )

    /**
     * update an application, just like the delete this is only available trough the _id
     */
    app.put(
        '/application/:id',
        function(req, res){
            // check if the body is present, this would be great to have ;)
            if (!req.body.name || req.body.name == ''){
                return methods.send(res, {message: 'No \'name\' defined'}, false);
            }

            options.models.Application.findByIdAndUpdate(req.params.id,
                {Name: req.body.name},
                function(err, data){
                    if (err){
                        return methods.send(res, {message: err}, false);
                    }
                    return methods.send(res, data, true);
                })
        }
    )

}
