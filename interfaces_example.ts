
export {}

/// Interfaces define properties, methods, and events 
/// It contains only declarations 

/// we will use interface here 

interface person
{
    firstname:string;
    lastname:string;
    say_something: ()=>string
}

/// object joy is of type person 
/// we must have declaration of our interface 
let joy:person=
{
    firstname:"Nayeem",
    lastname:"Mollick",
    say_something:():string => {return "Hi Man ";}
};

console.log("Customer Object ");
console.log(joy.firstname);
console.log(joy.lastname);
console.log(joy.say_something());

/// union type and interface 
/// we will use three types of initialization 
interface union_interface
{
    program_name:string;
    terminal:string[]|string|(()=>string);
};

let test1:union_interface=
{
    program_name:"first_test",
    terminal:"hello"
};
let test2:union_interface=
{
    program_name:"secnd_test",
    terminal:["hello","hi"]
};

let test3:union_interface=
{
    program_name:"secnd_test",
    terminal:()=>{return "hi boka";}
};

/// interfaces and inheritences 

/// An interface can be extended by other interfaces. 
/// In other words, an interface can inherit from other interface. 
/// Typescript allows an interface to inherit from multiple interfaces.

interface Person { 
    age:number 
 } 
 
 interface Musician extends Person { 
    instrument:string 
 } 
 
 /// drummer is type of Musician 
 let drummer = <Musician> {}; 
 drummer.age = 27;
 drummer.instrument = "Drums";
 console.log("Age:  "+drummer.age);
 console.log("Instrument:  "+drummer.instrument);

/// child and parent

interface parent1
{
    frst:string
};

interface parent2
{
    scnd:string
};

interface children extends parent1,parent2{
    lst:string
};

/// our object should have declarations 
let our_obj:children=
{
    frst:"Nayeem",
    scnd:"Mollick",
    lst:"Joy"
};

console.log("part 1: "+our_obj.frst+"part 2: "+our_obj.scnd+"part 3"+our_obj.lst);

/// output
/*
Customer Object 
Nayeem
Mollick
Hi Man  
Age:  27
Instrument:  Drums
part 1: Nayeempart 2: Mollickpart 3Joy
*/
