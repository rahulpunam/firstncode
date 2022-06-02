// console.log("hello rahul");
const express= require("express");
const http = express()


const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next();
}

http.get('/', (req,res)=>{
    res.send("hello rahul")
})
http.get('/gu', (req,res)=>{
  res.send("hello guru")
})


 http.listen(8080,(res,req)=>{
   console.log("server is started 8080");
})