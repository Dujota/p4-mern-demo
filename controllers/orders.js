// import the Order Model. I'm calling this OrderModel for clarity, but typically this variable is called Order
const OrderModel = require('../models/order.js');

module.exports = {
    create,
    index
}

async function create(req, res) {
    try {
        // 1. put the order in the database (the data will be incoming via `req.body`)
        console.log('Line items',req.body.lineItems);
        await OrderModel.create({ lineItems: req.body.lineItems })
        // 2. send a response to frontend - typically we send back the newly created order, or all the list of orders, or just an 'ok'
        res.status(200).json('ok. Order added to DB!' + req.body.lineItems)
    } catch (err) {
        res.json(err);
    }
}


async function index(req, res) {
    try {
        const orders = await OrderModel.find({})
        res.status(200).json({orders})
    } catch (error) {
        res.json(err);
    }
}