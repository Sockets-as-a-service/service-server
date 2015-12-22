module.exports = function (app, options, methods){

    /**
     *
     * @param text
     * @returns {*}
     */
    methods.hash = function (text) {
        var secret = options.secure.secret;
        var salt = options.secure.salt;
        var hash = options.crypto.createHmac('sha512', secret);
        hash.update(salt + text);
        var value = hash.digest('hex');
        return (value);
    };
}