var db=require('../dbconnection');

var Diagrama={

getAllDiagramas:function(callback){
return db.query("Select * from diagrama",callback);
},
getAllDiagramasByUser:function(id,callback){
    
    //console.log("-------------<"+ id);
    return db.query(`select * from diagrama where id_usuario= ${id} `,callback);
},
getDiagramaById:function(id,callback){
    //`foo${n}bar`
    return db.query(`select * from diagrama where id= ${id} `,callback);
},
addDiagrama:function(Diagrama,callback){
   //console.log("inside service");
   //console.log(Diagrama.Id);
   
   //{"id_usuario": id, "name": "Documento Nuevo", "position": "0 0", "version":"1", "author":name, "flecha": "Circle"}
   
   return db.query(`INSERT INTO diagrama  VALUES ( null, ${Diagrama.id_usuario}, '${Diagrama.name}','-32.51201375084611 12.124551391601585', '${Diagrama.version}', '${Diagrama.author}','${Diagrama.flecha}') `,callback);
   //return db.query(`INSERT INTO diagrama  VALUES ( null, ${id}, 'Nuevo documento','-32.51201375084611 12.124551391601585', '', '1') `,callback);
//return db.query(`INSERT INTO diagrama  VALUES ( null, ${Diagrama.id_usuario}, '${Diagrama.name}','${Diagrama.position}', '${Diagrama.author}', '${Diagrama.version}') `,callback);
},
deleteDiagrama:function(id,callback){
    return db.query(`delete from diagrama where id=${id} `,callback);
},
updateDiagrama:function(id,Diagrama,callback){
    //console.log("Soy el put ID--------------->"+id+"------------>"+Diagrama);
    //return  db.query("update diagrama set nombre=?,autor=?,version=? where id=?",[Diagrama.nombre,Diagrama.autor, Diagrama.version,id],callback);
    return db.query(`update diagrama set flecha = '${Diagrama.flecha}' where id = ${id} `,callback);
    
    //UPDATE table_name
//SET column1 = value1, column2 = value2, ...
//WHERE condition;
    
    
},
/*deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].id;
   }
   return db.query("delete from diagrama where id in (?)",[delarr],callback);
}*/
};
module.exports=Diagrama;