const router = require('express').Router();
const ExampleRoute = require('./APIRoute1');

// Book routes
router.use('/Example', ExampleRoute);

module.exports = router;
