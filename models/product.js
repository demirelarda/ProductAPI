const moongose = require('mongoose')

const productSchema = new moongose.Schema({
    name:{
        type: String,
        required:[true,'Product name must be provided!']
    },
    price:{
        type: Number,
        required:[true,'Product price must be provided!']
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default:0.0
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        //enum:['ikea','liddy','caressa','marcos'],
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message: '{VALUE} is not supported'
        },
        required:[true,'Product name must be provided!']
    },
})

module.exports = moongose.model('Product',productSchema)