module.exports = {


    Application:{
        Name: {
            required: true,
            type: String
        },
        Key: {
            required: true,
            type: String
        },
        Created: {
            required: true,
            type: Date,
            default: Date.now
        }

    }

}
