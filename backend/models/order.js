const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required:true
    }],
    shippingAddress1: {
        type: String,
        required: true,
    },
    shippingAddress2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
    totalPrice: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
})

orderSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

orderSchema.set('toJSON', {
    virtuals: true,
});

exports.Order = mongoose.model('Order', orderSchema);



/**
Order Example:

{
    "orderItems" : [
        {
            "quantity": 3,
            "product" : "61f7e3c80d3a4f63e0f92642"
        },
        {
            "quantity": 2,
            "product" : "61f7e23fd703071d6c571837"
        }
    ],
    "shippingAddress1" : "Rue de Bardo , 45",
    "shippingAddress2" : "1-C",
    "city": "Tunis",
    "zip": "2000",
    "country": "Tunisie",
    "phone": "+2160000000",
    "user": "61fa9df3c1c4b2408e3639fe"
}

 */