module.exports = function(app, options, methods){

    /**
     * cast to _g for easy access to dev function set
     * _generators
     */
    var _f = require('faker');
        _f.locale ='nl';

    /**
     * Generates list of random restaurants
     * @param amount
     */
    methods.gen_restaurant = function(){
        var n = ['hap','eat','du','croque','restaurant','snack','muur','genot','dam','eten',
        '&co','food','credible','in','le','amour'];

        var cats = ['Drinks','Main courses', 'Starters', 'Deserts', 'Lunch', 'Snacks'];


        for (var i = 0; i < methods.g_rand(50); i++){
            var r = {
                Name: n[methods.g_rand(n.length)-1] + " " + n[methods.g_rand(n.length-1)],
                Location:{
                    StreetName: _f.address.streetName(),
                    HouseNumber: methods.g_rand(81) + 1,
                    PostalCode: _f.address.zipCode(),
                    City: _f.address.city(),
                    Long: _f.address.longitude(),
                    Lat: _f.address.latitude(),
                    Country:{
                        CountryCode: "NL",
                        countryName: "The Netherlands"
                    }
                },
                ContactDetails:{
                    Phone: _f.phone.phoneNumber(),
                    Email: _f.internet.email()
                }
            };

            r.Category = [];
            for (var i = 0; i < cats.length; i++) {
                r.Category[i] = {
                    CategoryName: cats[i],
                    SubCategory: []
                };

                for (var x = 0; x < methods.g_rand(n.length); x++) {
                    r.Category[i].SubCategory[x] = {
                        SubCategoryName: n[methods.g_rand(n.length)-1],
                        Product: []
                    };
                    for (var y = 0; y < methods.g_rand(n.length); y++) {
                        r.Category[i].SubCategory[x].Product[y] = {
                            Amount: methods.g_rand(75),
                            ProductName: _f.name.findName() + n[methods.g_rand(n.length)-1],
                            Currency: "EUR",
                            Photo: _f.image.food()
                        };


                    }

                }

                var rest = new options.models.Restaurant(r);
                rest.save(function(err,docs){
                    console.log(err||docs);
                    console.log('-');
                });

            }


        }


    }


    methods.bind = function(){

        var d = new options.models.Tables({
            TableId: "23458723489023",
            RestaurantId: 'ObjectId("563e4fd67dcc91107908506a")'
        });
        d.save(function(){

        })
    }

    methods.g_rand = function(max){
        return Math.floor((Math.random() * max) + 1);
    }



}