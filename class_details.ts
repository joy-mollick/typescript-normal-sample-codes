
/// it is just for module 
export {}

/// we will use classes 

/// JavaScript ES5 or earlier didn’t support classes. 
/// Typescript gets this feature from ES6.

class car 
{
    /// field 
    engine:string;

    /// constructor 
    constructor(engine:string)
    {
        this.engine=engine;
    }

    //function 
   disp():void { 
    console.log("Engine is  :   "+this.engine);
 } 

}

//create an object 
let obj = new car("XXSY1");

//access the field 
console.log("Reading attribute value Engine as :  "+obj.engine); 

//access the function
obj.disp();

/// inheritance 

let pi = 3.14156;

class Shape 
{ 
    radius:number;
    
    constructor(a:number) 
    { 
       this.radius = a;
    } 
 };

 class Circle extends Shape
 {
      area():void
     {
        console.log("The area of circle is "+this.radius*pi*this.radius);
     }
 };

 /// we can create instance of Circle 
 /// By which we can access Shape class 
 let objct=new Circle(3);
 objct.area();


 /// multi-level inheritence 

 class Root { 
    str:string; 
 } 
 
 class Child extends Root {

 };/// empty class 

 class Leaf extends Child {

 }; //indirectly inherits from Root by virtue of inheritance  
 
 let objt = new Leaf(); 
 objt.str ="hello";
 console.log(objt.str);

 /// method overriding 

 class printerClass 
 { 
    doPrint():void 
    {
       console.log("doPrint() from Parent called…"); 
    } 
 };
 
 class StringPrinter extends printerClass 
 { 
    doPrint():void 
    { 
        /// it will print the parent class's method 
       super.doPrint() ;
       console.log("doPrint() is printing a string…");
    } 
 };
 
 let obt = new StringPrinter(); 
 obt.doPrint();

 /// instance operator 

 class joy {}; /// empty class
 let _obj =new joy();
 let isjoy= _obj instanceof joy;
 
 /// isjoy will be true if really _obj is instance of joy
 /// otherwise isjoy will be false 

 console.log("_obj is instance of joy class ,it is "+isjoy);

 /// classes can inherit from interfaces 
interface school
{
    name:string;
    roll:number;
    present:boolean;
    address:string;
    testimonial():void;
};

class nayeem implements school{
    name:string;
    roll:number;
    present:boolean;
    address:string;
   constructor(name:string,roll:number,present:boolean,address:string)
   {
        this.name=name;
        this.roll=roll;
        this.present=present;
        this.address=address;

   }
   testimonial():void
   {
       console.log(this.name + " is a very good student with roll no "+this.roll);
   }
}

let n_s_j=new nayeem("nayeem shahriar",1510574126,true,"sirajganj");
n_s_j.testimonial();

/// output 
/*
Debugger attached.
Reading attribute value Engine as :  XXSY1
Engine is  :   XXSY1
The area of circle is 28.27404
hello
doPrint() from Parent called…
doPrint() is printing a string…
_obj is instance of joy class ,it is true
nayeem shahriar is a very good student with roll no 1510574126

*/






 
