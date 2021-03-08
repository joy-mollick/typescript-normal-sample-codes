
/// it is example for declaring variables 


/// it is nothing but to teat this file as module not as script 
export {}

/// strict typed   
let name:string = "nayeem mollick joy";

/// this states for any type 
/// Inferred type 
let any_type= 5;

/// You can't assign this any type like this -> any_type='hi'
/// Because already compiler has assumed the type of any_type to number

/// thsese two are inferred type 
let num1 = 41.5;
let num2 = 30;

/// type assertion 
var on = 5;
var tw :string = <string> <any> on;

console.log(name);
console.log(any_type);
console.log(num1+num2);
console.log("the type of this is " +typeof(tw));

/// union type ,we can declare our value as mixed union type 
let val:string|number ;
val = 12 
console.log("numeric value of val "+val) ;
val = "This is a string" 
console.log("string value of val "+val);
