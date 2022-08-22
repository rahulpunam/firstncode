// const { set } = require("express/lib/application");

// const { append } = require("express/lib/response");

//const { SHORT } = require("mysql/lib/protocol/constants/types");

// const { set } = require("express/lib/application");

// let str = "goodmorning";
// let set =new set();

// let word= str.split("");
// word.forEach(ele=>{

// set.add(ele);

// })
// console.log(set);


// 1 8 3 6 5 4 7 2 9


// let ip = 9;
// var i;
// var j;
// if(i/2=o && i/2=j){
//     console.log(i);
//     console.log(j);
// }
// else{

// }


// if( let i/3=0){
//     console.log("lock");
// }
// if else(let i/5=0){
//     console.log("down");
// }
// if else(i/3=0 && i/5=0){
//     console.log("lock down");
// }
// else{
//     console.log(i);
// }


//print the character of string

// let arr = "rahul";
// let word = arr.length;
 
// for(var i=0;i<word;i++){
//     var current= arr.charAt(i);
//     console.log(current);

// }


// let arr = "rahulpawar";
// // let word = arr.length;
//  let ann= arr.indexOf("pawar");
//  console.log(ann);



// for(let i=1;)

// let arr = [1,2,3,4,6,33,56,22]
// let copp=arr.length;
//let i;
// for (let i of arr){

//     console.log(i);
// }
// for(var i/2=0; i<=copp; i++)
// {
//     console.log(i)
// }



// for (var i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i); }, i * 1000 );
//   }

//  var express= require("express")
//  var http= express()

//  http.listen(4000,()=>{
//      console.log("port 4000");
// })

//  let data = [22,22,10,10,13,21];

// let arr= data.length;
// for(var i= data[0];i<=arr;i++){
//     var current= arr.charAt(i);
//     console.log(current);

// }



// const arr =["1","2","2","3","3","5"];
// //const dep =arr.length;
// const unique=new Set(arr);
// console.log(unique);

// let arr = [1,2,3,4,6,33,56,22]
// let copp=arr.length;
// for(let i/2 = 0; i< =copp; i++) {
//    console.log(i);
    
// }
// let arr = [1,2,3,4,6,33,56,22]
// let copp=arr.length;
// for(let i=0;i<=copp;i++){
// if(arr[i]%2==0){
// console.log(i+"even number");
// }
// else{
//     console.log("it is odd")
// }
// }



// function add(...args){
//     console.log(args);
// }
// add(1,2,3,4);
//[1, 2, 3, 4]
// let arr = [1, 2, 3, 4]

//    var dep= arr[i]+1+2+3;
//     console.log(dep);
// function add(){
//      var sum =arr[0]+arr[1]+arr[2]+arr[3]
//      console.log(sum);
// }
// add();
// let arr = [1, 2, 3, 4]
// let red= arr.reduce((a,c)=>{
//      return a+c
// )}
// console.log(red);

//slice and plice array method

// var ddf= ["1","2","3","4","5"]
// var arr=ddf.slice(1,3)
// console.log(arr);

// var ddf= ["1","2","3","4","5"]
// var arr=ddf.splice(2,0,6,8)
// console.log(arr);


// var a=[1,2,3,4,5,6]
// var b=[7,8,9,4,5,6]
// var c=a+b;
// console.log(c);

// var a = ["1","2","3","4","5","6"]
// a.push("8","9");
// console.log(a)


//higher oder function:foreach,filter,map(),sort(),reduce();

//forEach()

//  var a=[1,2,3,4,5,6]


//  a.forEach(function(a,index){
 
// return a+index;
// console.log(a);
//  });

//filter

// var a=[1,2,3,4,5,6]

// var ss=a.filter(function(a,index){
//     if(a>=3){
//         return true;
//     }
// })
// console.log(ss)

//  var a=[1,2,3,4,5,6]
//  var dep =a.map(x=>x+2)
//  console.log(dep)

//map ()
// var a=[1,2,3,4,5,6]
// a.map(function(a,index){
//     console.log(a)
// })

//sortfunction()

//  var a=[1,2,3,4,5,6]
// var total =0;
// for(let i=0;i<a.length;i++){
//     total += a[i]
// }
// console.log(total);

//reduce ()

// var a=[1,2,3,4,5,6]
// var depo=a.reduce(function(total,a){
//     return total+a;
// })
// console.log(depo);

// var a=[2,2,4,4,5,6]
// var ff= new Set(a);
// console.log(ff);

// var i=[2,9,3,4,5,6,15]
//  i.forEach(function(i,index){


// if(i%3==0){
//     console.log("lock")
// }
// else if (i%5==0 && i%3==0){
// console.log("down")
// }
// else{
//     console.log("lockdown");
// }
// })


//spread operator

// var a=[1,2,3]
// var b =[ 4,5,6,...a]

// console.log(b);

//default parameter


// for(let i=1;i<=5;i++)
//     {
//         for(let j=1;j<=i;j++){
// console.log(array[j]);
//         }
//         console.log("");
//     }

// var a= {
//     name:'rahul',
//     lname:'pawar'
// }
// console.log(a.lname);
// let newa = Object.assign({},a,{age:'35'})
// console.log('newa:',newa);




// let str = "goodmorning";
// let set =new Set(str);

//  let word= str.split("");
// word.forEach(function(ele,index){

// set.add(ele);

//  })
// console.log(set);

// var a="goodmorning"

// var ff= new Set(a);
// console.log(ff);

//  var a=[1,2,3,4,5,6]

// var dep=a.split("").reverse().join(" ");
// console.log(dep);
// a.forEach(function(a,index) {
//     console.log(a);
// });

//  var a=[1,2,3,4,5,6]
// var total =0;
// for(let i=0;i<a.length;i++){
//
//     total += a[i]
// }
// console.log(total);

// var arr = [1,2,3,4,5,6];

 
// for(let i =arr.length;i>=0;i--){
//      console.log(arr[i])
//  }


// function demo (){
//     console.log("helo rahul")
// }
// function repo (req,res,callback){
//     console.log("hello sir")
//     callback();
// }
// repo(demo);

// setTimeout(() => {
    
// },1000);


// const candidate = {
//     name: "rahul",
//     designation: "developer"
//  }



//  candidate.designation = "Sr Developer"

//     console .log(candidate);

// for (var i = 1; i<5; i++){
//     setTimeout(() => {
//         console.log(i)
//     },1000)
// }


// let str = "goodmorning";
// let set =new Set(str);

// //  let word= str.split("");
// // word.forEach(function(ele,index){

// // set.add(ele);

// //  })
// console.log(set);

// let str = [1,1,2,2,3,5];
// let set =new Set(str);
// console.log(set);


//  var a=[1,2,3,4,5,6]
// var total =0;
// for(let i=0;i<a.length;i++){

//     total += a[i]
// }
// console.log(total);




// function ghjk(){
//  //var a=[1,2,2,3,4,4,5,6]

//  var  map = {}
// str.split("").forEach(element => {
//      map[element]=map[element]?map[element]+1:1;
//      console.log(map[element])
//  });
// }
//  ghjk(helloworld)


// var arr ="goodmorning"
// var dep= arr.split("").reverse().join("")
// console.log(dep);

// http://localhost:8080/welcome?name=abc

// Hello, abc
// app. get("/welcome",(req,res)=>{
//     console.log("name=abc");
// })

//Write a function which takes string as an input, capitalize the sixth letter, removes the first three, and prints out the result.
// var dp="goodmorning";

// function arr(){
//     var sep=dp.toUpperCase();
//     sep.POP(0,2);
//     console.log(sep);
// }
// arr();


// [1,5,[2,3]]
// [1,5,2,3]



    // var arr = [1,5,[2,3]]
    // var dep = arr.map(function (arr,a){
    //     console.log(dep)
    // });


//     [4:27 PM] Harinam Singh
//     {​apple:fruit,banana:fruit,carrot:vegetable}​
// ​[4:28 PM] Harinam Singh
//     {​fruit:[apple,banana],vegetable:[carrot]}​


// var depo = {
//     apple:"fruit",
//     banana:"fruit",
//     carrot:"vegitable"
// }

// depo.fruit = ["apple","banana"]
// console.log(depo.fruit);

// depo.vegitable = "carrot"
// console.log(depo.vegitable);



// var express= require("express");
// var http =express();
// http.listen(8080,(req,res)=>{
//     console.log("port is 8080")
// })



// // http.get("/rp",(req,res)=>{
// //     console.log("helo rahul")
// // })

// var depo = function demo(req,res)=>{
//     var a,b,c;
//     a=b+c;

// }
// console.log(demo)


// var arr= [1,2,3,4,5]
// var total= 0;
// for(i=0;i<=arr.length;i++){
    
//     return total+arr[i];

// }
// console.log(total);



// var dp = require("express")
// var http = dp.express();


// http.get("/",()=>{
//     console.log("this is get method")
// })

// http.post("/dsffg",()=>{
//     console.log("this is post method")
// })




// http.listen(8080,()=>{
//     console.log("this is port 8080")
// })


// var firstArray = [ "[2, 4, 1,5,6,7]" , "[1,0, 2,10,33,22]" ]
 

// // find_matched_val(firstArray, secondArray); // [2, 1]


// var  a = [ "[ 2, 4, 1,5,6,7]" ]

//   var b =  ["[1,0,2,10,33,22]"]

// // console.log(firstarray[0])

// // console.log(firstarray[1])

// var dept=  a[0].match(a[1])
// console.log(dept);
// var add= 0
// for(var i = 0; i < a.length; i++) {
//     for(var  x = 0; x < b.length; x++) {

//         if(a[i].match(b[x])) {
//              add += a[i];
//             b[x] = "ignore";
//             break;
//         }     
//         console.log(a[i]);                          
//     }

// }


//  for(let i=0;i<=thirdarray.length;i++) 
//  {
    
//  }

//  console.log(thirdarray);

// var x =5;
// function inner(){
//     var y= 10
//     console.log(x)
//     var x=10;

// }

// function outer(){
//     console.log(y)
// }

// inner();
// outer();


// console.log(x)
//  x =5var;





// var str = "john";
// var  dre= "John";


//     if(str==dre){
//         console.log("true")
//     }
//     else {
//         console.log("false")
//     }



    // var x = 3; var y = "3";
    //  var temp =  x + y
    //  console.log(temp);

    // var x = 3;
    //  var y = "3";
    //  temp = x - y
    //  console.log(temp);

    // if( 220 || "Hello" )
    // {​ 
    //     console.log("hello");
    //   }
    //   else{
    //     console.log("gjgj");
    //   }​


// var a=[1,2,3,4,5,6]
// var depo=a.reduce(function(total,a){
//     return total+a;
   
// })
// console.log(depo);

// var str ="rahulpawar"

//     for(var i = 0; i <= str.length; i++) {
//         for(var j = i+1; j <= str.length; j++) {
//             if(str[j] == str[i]) {
                
//                 console.log(str[j]); 
//             }
            
//         }
//     }
   


// var a = "rahulpawar";
// var count  = 0;

// for(let i=0;i<=a.length;i++){

// count += a[i]
//     console.log();
// }



// const obj = {a: 10, b: 20}
// const obj1 = obj
// obj1.c = obj.a + obj.b


// console.log(obj)









// var a = [10, 20, 50, 25, 40, 35, 30, 60]

// for(var i=0;i<=a.length;i++){
//     if(a[i]<60 && a[i]>40){

//         console.log(a[i])
//     }
// }









