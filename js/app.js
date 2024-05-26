// var code1 = "welcome sobh" 
// var code2 = code1.split("e")
// console.log(code2)
////////////////////////////////////////////////
// var code1 = "welcome sobh"
// var code2 = code1.slice(2,7)
// console.log(code2)
////////////////////////////////////////////////
// var code1 = "WELCOME"
// var code2 = code1.toLowerCase()
// console.log(code2)
// /////////////////////////////////////////////
// var code1 = "welcome"
// var code2 = code1.toUpperCase()
// console.log(code2)
// ///////////////////////////////////////////////
// var code1 = "                 welcome  sobh           "
// var code2 = code1.trim()
// console.log(code2)
// ///////////////////////////////////////////////
// var code1 = "welcome mahmoud sobh"
// var code2 = code1.indexOf("sobh")
// console.log(code2)
// ////////////////////////////////////////////////
// var code1 = ["islam" , "mahmoud" , "bahaa"]
// var code2 = code1.join()
// console.log(code2)
// ////////////////////////////////////////////////
// var code1 = ["islam" , "mahmoud" , "bahaa"]
// var code2 = code1.pop()
// console.log(code2)
// console.log(code1)
// ////////////////////////////////////////////////
// var code1 = ["islam" , "mahmoud" , "bahaa"]
// var code2 = code1.push("sobh")
// console.log(code2)
// console.log(code1)
// /////////////////////////////////////////////////
// var code1 = ["islam" , "mahmoud" , "bahaa"]
// var code2 = code1.shift()
// console.log(code2)
// console.log(code1)
// ////////////////////////////////////////////////
// var code1 = ["islam" , "mahmoud" , "bahaa"]
// var code2 = code1.unshift("sobh")
// console.log(code2)
// console.log(code1)
// /////////////////////////////////////////////////
// var code1 = ["islam" , "mahmoud" , "bahaa"]
// var code2 = code1.length
// console.log(code2)
// ///////////////////////////////////////////////
// var code1 = ["islam" , "mahmoud" , "bahaa"]
// var code2 = ["ziad" , "kero" , "sobh"]
// var res = code1.concat(code2)
// console.log(res)
// ///////////////////////////////////////////////
// var code1 = ["islam" , "mahmoud" , "bahaa"]
// var code2 = code1.slice(0,2)
// console.log(code2)
// ////////////////////////////////////////////////
// var num1 = Math.round(2.7)
// console.log(num1)
// ///////////////////////////////////////////////
// var num1 = Math.ceil(2.7)
// console.log(num1)
// //////////////////////////////////////////////
// var num1 = Math.floor(2.7)
// console.log(num1)
// /////////////////////////////////////////////
// var num1 = Math.pow(3,2)
// console.log(num1)
// /////////////////////////////////////////////
// var num1 = Math.sqrt(100)
// console.log(num1)
// /////////////////////////////////////////////
// var num1 = Math.random()*100
// var num2 = Math.floor(num1)
// console.log(num2)
// //////////////////////////////////////////////
// var customers = [
//     {
//         name : "mahmoud" ,
//         age : 20 , 
//         city : "cairo"
//     },
//     {
//         name : "islam" ,
//         age : 26 , 
//         city : "mansoura"
//     },
//     {
//         name : "bahaa" ,
//         age : 21 , 
//         city : "biala"
//     }
// ]
// var x = JSON.stringify(customers)
// document.getElementById("div1").innerHTML = x
//////////////////////////////////////////////////////
// var cost = [
//     {
//         name : "sobh" ,
//         age : 22 ,
//         city : "biala"
//     },
//     {
//         name : "kero" ,
//         age : 21 ,
//         city : "Alex"
//     },
//     {
//         name : "bahaa" ,
//         age : 23 ,
//         city : "Cairo"
//     }
// ]
// var y = JSON.stringify(cost)
// document.getElementById("div1").innerHTML = y
/////////////////////////////////////////////////////////
// function loadData (){
//     var x = new XMLHttpRequest() 
//     x.onreadystatechange = function (){
//         if (this.readyState == 4 && this.status == 200){
//             console.log(this.responseText)
//         }
//     }
//     x. open ("GET" , "https://jsonplaceholder.typicode.com/posts/1/comments" , false)
//     x.send();
// }
// loadData()
// ////////////////////////////////////////////////////////////
// var x = document.getElementsByClassName("cont1")
// console.log(x)
// x[2].style.color ="red"
// x[2].style.backgroundColor = " green "
// x[2].setAttribute("price" , "300000")
// console.log(x[2])
// //////////////////////////////////////////////////////////////
// var x = document.getElementsByClassName("cont1")
// x[2].style.color = "blue"
// x[2].style.backgroundColor = "green"
// ///////////////////////////////////////////////////////////////
// var x = document.getElementById("parent5")
// var y = document.getElementById("par-cont")
// var z = y.style.marginTop = 1000
// x.onclick = z
// console.log(z)
///////////////////////////////////////////////////////////////////
// var x = window.confirm("hello sobh")
// if(false){
//     console.log("hello")
// }
// console.log("ahmed")
////////////////////////////////////////////////////////////////////
// var btn1 = document.getElementById("openF")
// var btn2 = document.getElementById("closeF")
// var x ;
// function openFace(){
//      x = open("https://www.facebook.com/","face", "width = 500px , height = 500px")
// }
// btn1.onclick = openFace

// function closeface(){
//     x.close()
// }
// btn2.onclick = closeface
//////////////////////////////////////////////////////////////////////
// console.log(screen.width)
// console.log(screen.height)
// console.log(screen.availWidth)
// console.log(screen.availHeight)
// console.log(innerHeight)
// console.log(innerWidth)
///////////////////////////////////////////////////////////////////////
// console.log(navigator.language)
///////////////////////////////////////////////////////////////////////
// var t1 = setTimeout(function(){
//     confirm("hello sobh")
// } ,2000 )
// clearTimeout(t1)
///////////////////////////////////////
// var t2 = setInterval(function(){
//     alert("sobh")
// } ,2000) 
// clearInterval(t2)
//////////////////////////////////////////////////////////////////////
// var x = 20 
// x = 30 
// console.log(x)
////////////////////////////
// let x = 20 
// x = 30 
// console.log(x)
// /////////////////////////
// const x = 20 
// x = 30 
// console.log(x)
// ////////////////////////////////////////////////////
// var x = 20 
// var x = 30 
// console.log(x)
///////////////////////////
// let x = 20 
// let x = 30 
// console.log(x)
//////////////////////////
// const x = 20 
// const x = 30 
// console.log(x)
///////////////////////////////////////////////////////
// console.log(x)
// const x = 30 
///////////////////////////////////////////////////////
// var x = 19 
// function f1(){
//     if(false){
//         var x =8
//     }
//   console.log(x)
// }
// f1()
// let z = 19 
// function f2(){
//     if(false){
//         let z =8
//     }
//   console.log(z)
// }
// f2()
////////////////////////////////////////////////////////
// var x;
// function x(){
//     console.log("sobh")
// }
// console.log(typeof x)
////////////////////////////////////////////////////////
// function x( a=20, b=20){
//     console.log(a+b)
// }
// x(5,5)
// x()
///////////////////////////
// var x1 = (a,b) => console.log(a + b)
// x1( 5,5)
/////////////////////////////////////////////////////////
// function x( a = "ahmed" , b = "sobh") {
//     console.log( a , b)
// }
// x()
/////////////////////////////////////////////////////////
// function d( a = code() ){
//     console.log(a)
// }
// let x = 0
// function code(){
//     x+=1
//     return x
// }
// d()
// d()
// d()
// d(500)
// d()
///////////////////////////////////////////////////////////
// function code(name , greeting , message = greeting + " " + name){
//     return[name , greeting , message]
// }
// console.log(code("ahmed" , "welcome"))
// /////////////////////////////////////////
// function code(name , greeting , message = greeting + " " + name){
//     console.log(name , greeting , message )
// }
// code("ahmed" , "welcome")
// ////////////////////////////////////////////////////////////////////
// function x(a = "ahmed",b = "sobh"){
//     console.log(a + " " + b)
// }
// x()
/////////////////////////////////////////
// const arr = ["sobh" , "ahmed" , "kero"]
// console.log(arr)
// console.log(...arr)
//////////////////////////
// const obj1 = {
//     city : "mansoura",
//     name : "islam",
//     age : 26
// }
// const obj2 ={
//     ...obj1,
//     lname : "mohamed"
// }
// console.log(obj2)
/////////////////////////////////
// const arr1 = [20 , 30 , 40]
// const [a ,  ,c] = arr1
// // console.log(a)
// // console.log(b)
// console.log(c)
/////////////////////////////////////////////////////////////
// var [name1 , name2 , ...x] = ["esraa", "zain" , "ahmed" , "sobh"]
// console.log(...x)
/////////////////////////////////
// var [name1 , name2 , x] = ["esraa", "zain" , "ahmed" , "sobh"]
// console.log(x)
// /////////////////////////////
// this.x = 20
// console.log(window.x)
//////////////////////////////
// var x = 50
// function y(){
//     return this.x
// }
// console.log(y())
//////////////////////////////
// var person = {
//     fName : "mahmoud",
//     lName : "sobh",
//     fullName : function(){
//         return this.fName + " " + this.lName
//     }
// }
// console.log(person.fullName())
//////////////////////////////////
// var obj = {
//     name : "islam"
// }
// var name="mohamed"
// function x(){
//     return this.name
// }
// console.log(x.call(obj))
///////////////////////////////
// const x = `
//     <div>
//       <span> sobh </span>
// `
// console.log(x)
////////////////////////////////////////////////
// const x = `
//     <div>
//       <span> this is span ${4 * 7}</span>
//     `
// console.log(x)
//////////////////////////////////
// var car1 = {
//     model : function (){
//         return this.name + " " + this.model
//     }
// }
// var car2 ={
//     name : "BMW",
//     model : "2020"
// }
// console.log(car1.model.call(car2))
//////////////////////////////////////////
// "use strict"
// x = 50 
// console.log(x)
/////////////////////
// function code(){
//     x = 50
//     console.log(x)
// }
// code()
////////////////////////////////
// var x = 20
// delete x
// console.log(x)
// /////////////////////////////
// function code(a , a){
//     console.log(a + a)
// }
// code(200 , 7)
// /////////////////////////////
//  var arr =[ 1 , 2 , 3 , 4 , 5]
//   arr.forEach(function(x,y,z){
//     console.log(z)
//  })
//////////////////////////////////
// var arr = [20,30,40,50]
// var dou = arr.map(function(item){
//     return item*2
// })
// console.log(dou)
//////////////////////////////////
// var arr = [1,2,3,4,5,6,7,8,9]
// var odd = arr.filter(function(item){
//     return item %2 ===1
// })
// console.log(odd)
//////////////////////////////////
// var arr = ["sobh" , " menshawy" , "kero" , "Bebo" , "islam"]
// var code = arr.filter(function(item){
//     return item.length > 5
// })
// console.log(code)
/////////////////////////////////
// const arr = [1,2,3,4,5]
// const sum = arr.reduce(function(acc,currrent){
//     return acc * currrent
// })
// console.log(sum)
// //////////////////////////////
// const arr = [1,2,3,4,5]
// const sum = arr.reduce(function(acc,currrent){
//     return acc +currrent
// } , 100)
// console.log(sum)
/////////////////////////////////
// let player = ["shenway" , "sobh" , "kero" , "sayed"]
// function code(arr,x){
//     return arr.filter(function(item){
//         return item.indexOf(x) !== -1
//     })
// }
// console.log(code(player , "s"))
/////////////////////////////////////
// const arr = [1,2,3,4,5,6,7,8,9]
// const x =arr.some(function(item){
//     return item >7
// })
// console.log(x)
////////////////////////////////////
// const arr = [1,2,3,4,5,6,7,8,9]
// const x =arr.every(function(item){
//     return item >7
// })
// console.log(x)
////////////////////////////////////////////    REACT      ///////////////////////////

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => response.json()
// .then((data) => data.map((ele) => console.log(ele.id , ele.title)))
// .catch((error) => console.error("Error404") ) )

////////////////////////

// //board
// let board;
// let boardWidth= 360
// let boardHeight = 640
// let context;

// window.onload = function (){
//     board = document.getElementById("#board")
//     board.height = boardHeight;
//     board.width = boardWidth;
//     context = board.getContext("2d")    // used for drawing on the board
// }


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => response.json()
// .then((data) => data.map((ele) => console.log(ele)))
// .catch((error) => console.error("Error404") ) )
/////////////////////////////////////////////
// async function data(){
//     const x = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const y = await x.json()
//     y.map((ele)=> console.log(ele))
//     // console.log(y)
// }
// data()
// .then((x) => console.log("كله تحت السيطرة"))
// .catch((error)=>console.error("كله رايح"))
// // ////////////////////////////////////////
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((x) => console.log(x))
// /////////////
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((x) => x.data.map((ele) => console.log(ele.id , ele.title)))
// .catch((error) => console.error("كله رايح"))
// /////////////////////////////

// .............//// Node.js  //// .....................

// const fs = require ("fs")
// fs.writeFileSync ("data.js" , "islam")
// console.log(fs.readFileSync("data.js"))
// console.log(fs.readFileSync("data.js") .toString())

// fs.appendFileSync ("data.js" , "  , sobh")
// console.log(fs.readFileSync("data.js") .toString())

// ////////////////////////////////////

// const x = require ("./allData")

// console.log(x.mull(2,2))

// ////////////////////////////////

// const validator = require("validator")
// console.log(validator.isEmail("islam.com"))

// //////////////////////////////////
// const validator = require("validator")
// console.log(validator.isEmail("sobh@gmail.com"))

//////////////////////////////// lec 2 ///////////////// 

// console.log(process.argv)
// console.log(process.argv[1])
// console.log(process.argv[2])         الداتا اللي بكتبها 

// const command = process.argv[2] 
// if(command === "add"){
//     console.log("you added item")
// }else if(command === "delete"){
//     console.log("you delete item")
// }else{
//     console.log("error")
// }

// ///////////////////

// const yargs = require("yargs")
// yargs.command({
//     command:"add",
//     describe:"add item",
//     handler: ()=>{
//         console.log("you have added an item")
//     }
// })
// console.log(yargs.argv)

const yargs = require("yargs")

yargs.command({
    command:"add",
    describe:"add items",
    builder:{
        fname:{
            describe:"this is first name",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"this is last name",
            demandOption:false,
            type:"string"
        }
    },
    handler: ()=>{
        console.log("you have added item")
    }
})
console.log(yargs.argv)

// const person = {
//     fname:"sobh",
//     lname:"ahmed"
// }
// const personJson = JSON.stringify(person)
// console.log(person)
// console.log(personJson)

// const fs = require("fs")
// fs.writeFileSync("data.json" , personJson)

/////////////////////// lec 3 /////////////////

