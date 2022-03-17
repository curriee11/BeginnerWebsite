let a=10;
console.log(a);
let b=[1,4,7,5,4,9];
console.log(b);
console.log("Hello World!!");

c=10; // global variable
let d=90; // block scope
var e=100; //function scope

function fun()
{
    let a=5;
    if(a===5)
    {
        f=98;
        console.log("Inside",f);
    }
    console.log("Outside",f);
}
fun();
console.log("Global",f);
function cal(n)
{
    return Math.sqrt(n);
}

//Function Hoisting
addd();

function addd()
{
    console.log("Hey There!!");
    return;
}
var diff=function()
{
    console.log("Hello World!!");
    return;
}

let arr = ["Apple","Banana","orange","grape"];
console.log(arr);
arr.push("pear");
console.log(arr);
arr.pop();
console.log(arr);

var bird={
    x:90,
    y:100,
    color:"purple",
    eggs:["one","two","three"],
    fly:function()
    {
        console.log("Bird is flying",this.x,this.y);
    }
}
for(let i=0;i<bird.eggs.length;i++)
{
    console.log(bird.eggs[i]);
}
/*bird.eggs.foreach(val,idx)
{
    console.log(idx,val);
};*/
function fruit(taste,color)
{
    this.color=color;
    this.taste=taste;
}
var apple={
    taste:"sweet",
    color:"red",
}

let orange=new fruit("sour","orange");
let mango=new fruit("sweet","yellow");

class fruitclass1{
    constructor(taste,color)
    {
        this.color=color;
        this.taste=taste;
    }
}
let kiwi1=new fruitclass1("sweet","green");

let fruitclass2=class
{
    constructor(taste,color)
    {
        this.color=color;
        this.taste=taste;
    }
}
let kiwi2=new fruitclass2("sweet","green");