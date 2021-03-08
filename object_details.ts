

export {}

/// object details 

/// An object is an instance which contains set of key value pairs.

let person = { 
    firstname:"Nayeem", 
    lastname:"Mollick" 
 }; 
 ///access the object values 
 console.log(person.firstname);
 console.log(person.lastname);

 /// To add something later into our object 

 var details = {
    first_Name:"Tarikul", 
    last_Name:"Islam", 
    sayHello:function() {  }  //Type template 
 } 
 /// we can't modify any value of object which is not in our object 
 details.sayHello = function() {  
    console.log("hello "+details.first_Name);
 }  
 details.sayHello();


 /// we can pass our objects into our function as parameter

 let nw_func= function(obj:{firstname:string,lastname:string})
 {
     console.log("Object parameters");
    console.log("first name :"+obj.firstname) ;
    console.log("last name :"+obj.lastname) ;
 }

 nw_func(person);

 /// output 
 
 /*
 Nayeem
Mollick
hello Tarikul    
Object parameters
first name :Nayeem
last name :Mollick
 */
