//Data type
var name="seetha"
var regis=9786978
var mail="seetha@example.com"
var oops=50
var dsc=60
var aiml=70
var total= oops+dsc+aiml
var avg=(oops+dsc+aiml)/3

console.log("Name: "+ name )
console.log("Registration Number: "+regis)
console.log("Email: "+mail)
console.log("Oops: "+oops)
console.log("Dsc: "+dsc)
console.log("AIML: "+aiml)
console.log("Total Marks: "+total)
console.log("Average Marks: "+avg)

//Increment and Decrement
var a=1000
var b=100
var c=--a
b=++c
a=c
console.log(a)
console.log(b)
console.log(c)




//eg:
var a=100
var b=--a
var c=a
console.log(a)
console.log(b)
console.log(c)


function first(age)
{
    console.log("Her age is " + age);
}
first(18);


const fruits = ["apple", "banana", "cherry"];
console.log(fruits);
console.log(fruits[0]); 
fruits[1] = "blueberry";
fruits.push("date");     
fruits.unshift("avocado"); 
fruits.pop();   
fruits.shift();  
for (let fruit of fruits) {
  console.log(fruit);
}