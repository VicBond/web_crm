const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const controller = require('../controllers/category');
const router = express.Router();


router.get('/', controller.getAll);
router.get('/:id', controller.getAll);
router.delete('/:id', controller.remove);
router.post('/', controller.create);
router.patch('/:id', controller.update);


module.exports = router;