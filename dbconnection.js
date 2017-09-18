var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'ksantacr',
password:'',
database:'db_diagrama'

});
module.exports=connection;