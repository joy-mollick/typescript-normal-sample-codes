
/// it is example for declaring variables 


/// it is nothing but to teat this file as module not as script 
export {}

function disp_details(id:number,name:string,mail_id?:string) 
{ 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    /// it is an optional parameter 
    /// it will be treated as string if given else it will be treated as undefined 
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 

    else console.log("There is no Email");

 }

 disp_details(1234,"Nayeem Mollick");
 disp_details(1234,"Nayeem Mollick","nayeemjoy59@gmail.com");

 /// rest parameters like sending an argument 

 function addNumbers(...nums:number[]) {  
    let i=0;   
    let sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 

 addNumbers(1,2,3);
 addNumbers(10,10,10,10,10);

 /// default parameters 

 /// here rate will be treated as default by value 0.50 if not given
 /// otherwise it will take the given value 
 function calculate_discount(price:number,rate:number = 0.50) 
 { 
    let discount = price * rate; 
    console.log("Discount Amount: ",discount); 
 } 
 calculate_discount(1000);
 calculate_discount(1000,0.30);

 /// Anonymous functions with parameters 
 let res = function(a:number , b:number)
 {
     return (a*b);
 }

 console.log(res(3,4));


 /// function recursive  
 /// example of factorial 
 function fact(n:number)
 {
     if(n<=0) return 1;
     else return n*fact(n-1);
 }

 console.log(fact(5));

 /// lambda expression of function

 let result = (x:number)=>10+x;
 console.log(result(5));


 /// functions overloading 

 // here is two diffent declarations of our functions 
 function dis(str1:string):void;
 function dis(n:number,str:string):void;

 function dis(x:any,y?:any):void
 {
     ///it states for first function one parameter
    if(y==undefined) 
    {
     console.log("This is for first function "+x); 
    }
    /// it states for second function two parameters
    else
    {
        console.log("This is for second function \n"+x);
        console.log(y);
    }
 }

 /// we should keep in mind about signatures of function 
 dis("Nayeem");
 dis(1,"Nayeem");

 /// we can use union type parameters 
 function disp(name:string|string[]) { 
    if(typeof name == "string") { 
       console.log(name) 
    } else { 
       var i; 
       
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
 } 
 disp("mark") ;
 disp(["Mark","Tom","Mary","John"]);
