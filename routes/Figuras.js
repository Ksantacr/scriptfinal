var express = require('express');
var router = express.Router();
var Figura=require('../models/Figura');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Figura.getFiguraById(req.params.id,function(err,rows){
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
 Figura.getAllFiguras(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            console.log("Listando figuras");
            res.json(rows);
        }
    });
}
});
router.post('/',function(req,res,next){
    //console.log(req.body.name);
    //res.json(req.body);
        Figura.addFigura(req.body,function(err,count){
            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                console.log("Figura agregada");
                res.json(req.body);//or return count for 1 & 0
                
            }
        });
});
router.delete('/:id',function(req,res,next){
    res.json(req.body);
        Figura.deleteFigura(req.params.id,function(err,count){
            if(err)
            {
                res.json(err);
            }
            else
            {
                console.log("Figura eliminada");
                res.json(count);
                
            }

        });
});
router.put('/:id',function(req,res,next){
    res.json(req.body);
    Figura.updateFigura(req.params.id,req.body,function(err,rows){
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