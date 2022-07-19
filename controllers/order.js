const Order = require('../models/Order');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = function(req, res) {
  
}
module.exports.create = async function(req, res) {
 try {
   
   const order = await new Order({
    list: req.body.list,
    user: req.user.id,
   

   }).save();

   res.status(201).json(order);
 } catch (error) {
   errorHandler(res, error)
 }
}