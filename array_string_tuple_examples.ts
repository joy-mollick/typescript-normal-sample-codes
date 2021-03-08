
export {};
/// normal array declarations 
var alphas:string[]; 
alphas = ["1","2","3","4"];
console.log(alphas[0]); 
console.log(alphas[1]);


/// it has been coded by using array object 
/// By array object we can use some property like .length etc.
let arr_names:number[] = new Array(4) ; 

for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * i; 
   console.log(arr_names[i]) 
}

/// we can make string array by giving comma separated values into constructor 

let names:string[] = new Array("Nayeem","Jony","Tanim","Samba");

for(var i = 0;i<names.length;i++) { 
   console.log(names[i]);
}

/// we can use for.... in loops for traversing 
let j:any; 
let nums:number[] = new Array(10,30,5,40);
nums.push(100);
// using sort method using compare function
nums.sort((a:number,b:number)=>a-b);

/// for in loops 
for(j in nums) { 
   console.log(nums[j]);
} 

let st:string = "joy";
/// string objects 
let _name = new String("nayeem mollick joy");
/// making a substring from main string _name 
let sbtr:string = _name.substring(0,5);

/// we can use such many method of string object 
console.log(_name.length);
console.log(_name.charAt(2));
console.log(sbtr);

/// we will discuss now about tuples 
/// by tuples ,we can take mixed data type values in array not only a one type values 
let mytuple = [10,"samba"];
/// when you declare and assign value at the same time you can't push any item of another data type 
mytuple.push(13);
mytuple.push("joy");
mytuple.push("jony");
/// it will delete the last item pushed in our tuple 
mytuple.pop();

let l:number=0;
for(;l<mytuple.length;l++)
{
    console.log(mytuple[l]);
}

/// you can initialize first and then assign values later
/// then we can push any type value in our tuple 

let tuple = [];//empty 
tuple.push(25);
tuple.push(4.5);
tuple.push("Nayeem");

let k:number=0;

for(k;k<tuple.length;k++)
{
    console.log(tuple[k]);
}



