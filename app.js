// function hello(){
//     console.log("hello ");
// }

// console.log("one ");

// setTimeout(()=>{
//     console.log("hello");
// },3000);

// console.log("two");
// console.log("three ");

// Callback function here are callback functions are present here 
// which takes function as an argument 

 function sum(a,b){
     console.log(a+b);
 }

 function Calculator(a,b,sumCallback){
     sumCallback(a,b);
 }

 Calculator(1,2,sum);

 // Another method to use callback function 
 Calculator(1,2,(a,b)=>{
    console.log(a+b);
 });

 function hello(){
    console.log("hello ");
 }

 setTimeout(hello,3000); // setTimeout takes callback function for their executions 
