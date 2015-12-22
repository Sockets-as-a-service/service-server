'use strict';

module.exports = function(schemas, mongoose){

//create model function
var createModel = function(collection, schema){
	return mongoose.model(collection, mongoose.Schema(schema, {collection:collection}));
};

//convert collections to models
var models = {};
for(var collection in schemas){
    if(schemas.hasOwnProperty(collection)){
	   var schema = schemas[collection];
	   models[collection] = createModel(collection, schema);
    }
}

//return models and schemas
return models;

};
