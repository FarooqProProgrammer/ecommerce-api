var express = require('express');
const { Auth } = require('../../controller/auth');
var router = express.Router();


router.post('/login',Auth.Login)
router.post('/signup',Auth.Register)



module.exports = router;
