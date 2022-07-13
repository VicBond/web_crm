const Category = require('../models/Category');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
  try {
    const categories = await Category.find({user: req.user.id});
    res.status(200).json(categories);
  } catch (error) {
    errorHandler(res, error);
  }
}

module.exports.getById = function(req, res) {
  try {
    
  } catch (error) {
    errorHandler(res, error);
  }
}

module.exports.remove = function(req, res) {
  try {
    
  } catch (error) {
    errorHandler(res, error);
  }
}

module.exports.create = function(req, res) {
  try {
    
  } catch (error) {
    errorHandler(res, error);
  }
}

module.exports.update = function(req, res) {
  try {
    
  } catch (error) {
    errorHandler(res, error);
  }
}