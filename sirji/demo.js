

var dep = require("express")
var http = dep();


http.listen(8080,()=>{
    console.log("this is port 8080");
})

http.get("/",()=>{
    console.log("hello rahul")
})