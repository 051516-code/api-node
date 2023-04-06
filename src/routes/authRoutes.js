const {Router}= require('express');
const router = Router();

//TODO: import the controller
const { signup } = require('../constrollers/authController')

router.get('/login', signup);



module.exports = router;