var db=require('../dbconnection');

var Figura={

getAllFiguras:function(callback){
return db.query("Select * from figura",callback);

},
getFiguraById:function(id,callback){
    //`foo${n}bar`
    return db.query(`select * from figura where idDiagrama= '${id}' `,callback);
},//post
addFigura:function(Figura,callback){
   //console.log("inside service");
    return db.query(`INSERT INTO figura VALUES ( ${Figura.idDiagrama},'${Figura.text}', '${Figura.figure}', '${Figura.fill}', ${Figura.key}, '${Figura.loc}' ) `,callback);
},
deleteFigura:function(id,callback){
   // console.log("inside service");
   //console.log("---------------------------------------------------->"+id);
    return db.query(`delete from figura where idDiagrama=${id} `,callback);
},
updateFigura:function(Figura,callback){
    //return  db.query("update Figura set nombre=?,autor=?,version=? where id=?",[Figura.nombre,Figura.autor, Figura.version,id],callback);
    return  db.query(`update figura set text = '${Figura.text}', figure = '${Figura.figure}', fill = '${Figura.fill}', key = ${Figura.key}, loc = '${Figura.loc}' where idDiagrama='${Figura.exitid}' `,callback);
},
};
module.exports=Figura;