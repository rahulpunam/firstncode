// console.log("hello rahul");
var express= require("express");
var http= express();


const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mango'
})

connection.connect()
    


 

//connection.end()



 var myloger = function(req,res,next){
    console.log("middleware");
next();
}

http.use(myloger)

http.get('/insert',(req,res)=>{
  connection.query(`INSERT INTO emplyees (Name, collage, village ,Email,sailary)
  VALUES ('sonu', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger@gmail','10000'),
  ('dipu', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger@gmail','20000'),
  ('sanju', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger@gmail','30000'),
  ('kailash', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger@gmail','40000'),
  ('mahen', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger@gmail','50000'),
  ('gaiurav', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger@gmail','60000'),
  ('ram', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger@gmail','40000')`, (err, results, fields) => {
   if (err) {
 
  return  console.log(err)
   }
   return  console.log(results)
 });
    
});

http.patch('/update/:id',(req,res)=>{
  connection.query(`UPDATE students SET name ="?" where  Id=?`,[req.params.id], (err, results, fields) => {
   if (err) {
  return  console.log(err)
   }
   return  console.log(results)
 });
    
});


http.delete('/remove/:id',(req,res)=>{
  connection.query(`DELETE FROM students WHERE Id=?`,[req.params.id], (err, results, fields) => {
   if (err) {
 
  return  console.log(err)
   }
   return  console.log(results)
 });
    
});

http.listen(4400,()=>{
  console.log("server is start");
});
