var LocalStrategy = require('passport-local').Strategy;
//var mysql = require('mysql');
var db=require('../dbconnection');
var bcrycpt = require('bcryptjs');

module.exports = function(passport){
    
    
    passport.serializeUser(function(user, done){
       done(null, user); 
    });
    
    passport.deserializeUser(function(obj, done){
       done(null, obj);
    });
    passport.use(new LocalStrategy({
        passReqToCallback: true
    }, function(req, email, password, done){
        console.log("hellow");
        db.query("SELECT * FROM users WHERE email = ?", email, function(err, rows, fields){
            if(err) throw err;
            
            if(rows.length>0){
            var user = rows[0];
            if(bcrycpt.compareSync(password, user.password)){
                return done(null, {
                    id: user.id,
                    nombre: user.nombre,
                    email: user.email
                });
            }
        }
        return done(null , false);
            
        });
        
        
        
        
        
        
        
        //console.log(email);
        //return;
        
    })
    )
    
    
}