var express = require('express');
var router = express.Router();
var Punto=require('../models/Punto');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Punto.getPuntoById(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{
 Punto.getAllPuntos(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
}
});
router.post('/:id?',function(req,res,next){
    
    //console.log(req.body.name);
    //res.json(req.body);

        Punto.addPunto(req.params.id,req.body,function(err,count){
            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(req.body);//or return count for 1 & 0
            }
        });
});
router.delete('/:id',function(req,res,next){
        Punto.deletePunto(req.params.id,function(err,count){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }

        });
});
router.put('/:id',function(req,res,next){
    Punto.updatePunto(req.params.id,req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;