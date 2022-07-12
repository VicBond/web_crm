const position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

module.exports.getByCategoryId = async function(req, res) {
  try {
    const positions = await Position.find({ 
      category: req.params.categoryId,
      user: req.user.id
    })
    res.status(200).json(positions)
  } catch (err) {
    errorHandler(res, err);
  }
}

module.exports.create = async function(req, res) {
  try {
    const position = await new Position({
      name: req.body.name,
      cost: req.body.cost,
      category: req.body.category,
      user: req.user.id,

    }).save()
  } catch (err) {
    errorHandler(res, err);
  }
}

module.exports.remove = function(req, res) {
  try {

  } catch (err) {
    errorHandler(res, err);
  }
}

module.exports.update = function(req, res) {
  try {

  } catch (err) {
    errorHandler(res, err);
  }
}