const router = require('express').Router();
var welcomeController = require('../controllers/welcome.controller.js');
var registerController = require('../controllers/register.controller.js')

router.get('/',welcomeController.welcome)
router.post('/emp/register',registerController.register);
module.exports = router;