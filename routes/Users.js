var express = require('express');
var router = express.Router();
var Usuario=require('../models/Usuario');

var passport = require('passport');


router.get('/login', Usuario.getSignUp);
router.post('/login', passport.authenticate('local', {
    
    successRedirect: '/diagramas',
    failureRedirect: '/login'
    
}));
//router.post('/login')
//router.post('/login', Usuario.postSignIn);

router.post('/registro', Usuario.postSignUp);
module.exports=router;