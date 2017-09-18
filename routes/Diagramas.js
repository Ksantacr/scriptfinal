var express = require('express');
var router = express.Router();
var Diagrama=require('../models/Diagrama');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Diagrama.getDiagramaById(req.params.id,function(err,rows){
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
//Diagrama.getAllDiagramasByUser
 Diagrama.getAllDiagramas(function(err,rows){
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


router.get('/user/:id',function(req,res,next){
    
    //console.log("--------------------------------->BODY"+req.body);
    Diagrama.getAllDiagramasByUser(req.params.id,function(err,rows){
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

router.post('/',function(req,res,next){
    
    //console.log(req.body.name);
    //res.json(req.body.name);

        Diagrama.addDiagrama(req.body,function(err,count){
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

router.get('/eliminarDiagrama/:id', function(req, res){
    
    console.log("Eliminar diagrama"+ req.body);
    Diagrama.deleteDiagrama(req.params.id,function(err,count){
            if(err) throw err;
            
            res.redirect('../../../diagramas');

        });
    
    
})
/*router.get('/crearDiagrama/:id', function(req, res){
    
    Diagrama.addDiagrama(req.params.id,function(err,count){
            //if(err) throw err;
            
            res.redirect('../../../diagramas');
        });

})*/


/* router.post('/:id',function(req,res,next){
  Diagrama.deleteAll(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});*/
router.delete('/:id',function(req,res,next){
        Diagrama.deleteDiagrama(req.params.id,function(err,count){
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
    console.log("Soy put"+req.params.id);
    //res.json(req.body);
    //console.log("<------------------------------ID:"+req.params.id+ "----------------->"+req.body);
    Diagrama.updateDiagrama(req.params.id,req.body,function(err,rows){
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