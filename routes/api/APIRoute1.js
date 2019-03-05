const router = require('express').Router();
const ExampleController = require('../../controllers/ExampleController');

router.route('/').get(ExampleController.findAll).post(ExampleController.create);

router.route('/params').get(ExampleController.findByParams);

// Matches with "/api/books/:id"
router.route('/one/:id').get(ExampleController.findById).put(ExampleController.update).delete(ExampleController.remove);

module.exports = router;
