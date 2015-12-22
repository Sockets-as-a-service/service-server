module.exports = function(app, options, methods){
    /**
     *
     * @param res
     * @param data
     * @param status
     * @returns {*}
     */
    methods.send = function(res, data, status){
        return res.send({
                data: data,
                success: status || false,
                count: data.length
            });
    }

}