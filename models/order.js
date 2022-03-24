const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    lineItems: String,
}, {
    timestamps: true,
});

let OrderModel = mongoose.model('Order', orderSchema); // .model compiles the schema into a model
module.exports = OrderModel; // export model