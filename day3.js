console.log("Task-1----------------")
var a="     spaceatstart";
var b="atend    ";
var str=a.concat("",b);
var c=str.trim()
var d=c.toUpperCase();
console.log(a);
console.log(b);
console.log(c);
console.log(d);


console.log("Task-2----------------")
var a="important"
var b=a.slice(3,5)
console.log(b);
var c=b.charAt(1);
console.log(c);
var d=b.toUpperCase();
console.log(d);


console.log("Task-3----------------")
var char="am";
var a=891;
var ex=char.concat("",a);
console.log(ex.toUpperCase())
console.log(ex.slice(-2,-1))


console.log("Task-4----------------")
a="stringone"
b="stringtwo"
console.log(a);
console.log(b);
c=a.slice(0,3)
d=b.slice(6)
e=c+d;
console.log(e);

c.slice(0,1);
var x=c.slice(0,1).toUpperCase()+c.slice(1,3)+d.slice(0,2)+d.slice(2,3).toUpperCase();
console.log(x);


console.log("Task-5----------------")
a="   string    "
console.log(a)
x=a.trim();
console.log(x);
y=x.slice(0,1).toUpperCase()+x.slice(1,5)+x.slice(-1).toUpperCase();
z=" add";
console.log(y+z);


console.log("Task6-----------------")
a="hello there , how are you";
console.log(a.indexOf("are"))





