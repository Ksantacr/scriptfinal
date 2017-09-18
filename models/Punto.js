var db=require('../dbconnection');

var Punto={

getAllPuntos:function(callback){
    return db.query("select * from points",callback);
},
getPuntoById:function(id,callback){
    //`foo${n}bar`
    return db.query(`select points from points where idDiagrama= ${id} `,callback);
},
addPunto:function(id,Punto,callback){
   //console.log("inside service");
   //console.log(Punto.Id);
   
return db.query(`INSERT INTO points VALUES ( ${id},'${Punto.points}', ${Punto.from}, ${Punto.to}) `,callback);
},
deletePunto:function(id,callback){
    return db.query(`delete from points where idDiagrama=${id} `,callback);
},
updatePunto:function(id,Punto,callback){
    //return  db.query("update Punto set nombre=?,autor=?,version=? where id=?",[Punto.nombre,Punto.autor, Punto.version,id],callback);
    return  db.query(`update points set position = '${Punto.position}' where idDiagrama=${id} `,callback);
},
};
module.exports=Punto;