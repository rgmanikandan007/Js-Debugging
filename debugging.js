// 1
let nums = [1,2,3];
for(let i=0; i<=nums.length; i++){
    console.log(i);
}


// 2
let person = {
    name: "John",
    age: 25
}
console.log(person["name"]);


// 3
function add(a,b){
    return a+b;
}
console.log("Addition Completed");


// 4
const arr = [5,10,15];
console.log(arr.length);


// 5
<p id="myElement">Hello</p> 
document.getElementById("myElement").textContent = "Hello";


// 6
let numbers = [1,2,3];
numbers.forEach(num => {
    if(num > 2){
        console.log(num);
    }
})


// 7
let fruit = "apple";
switch(fruit){
    case "banana":
    console.log("Banana")
    break;
    case "apple":
    console.log("Apple")
    break;
    default:
    console.log("Unknown fruit")
}


// 8
let student = {
    info : {
        name: "Anna",
        age: 20
    }
}
console.log(student.info.age);


// 9
function greet(name){
    console.log("Hello"+name);
}
greet(" Sam");



// 10
document.querySelector(".myButton").addEventListener("click", function(){
    // code to be Write...
})



// 11
for(let i=0; i<5; i++){
    console.log(i);
}



// 12
document.querySelector(".nonExistent").textContent = "Hello!"



// 13
let car = {
    brand : "Toyota",
    year : 2020,
    color: "Blue"
}
console.log(car.color.length);



// 14
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));



// 15
const items = [1,2,3];
for(let index of items){
    console.log(items[index]);
}




// 16
let score = 80;
if(score > 90){
    console.log("A")
} else if(score > 70){
    console.log("b")
} else {
    console.log("c")
}



// 17
document.getElementById("button").onclick = function(){
    console.log("Clicked");
};



// 18
let value = 10;
let message = value > 5 ? console.log("Greater") : console.log("Lesser");



// 19
function greet(name){
    return "Hello" + name;
}
console.log(greet(" Mani"))




// 20
let input = 5;
if(input =="5"){
    console.log("Equal");
}




// 21
let color = "blue";
switch(color){
    case "blue":
    console.log("it's blue");
    break;
    case "red":
    console.log("it's red");
    break;
    default:
    console.log("Unknown color");
}




// 22
let x = 10;
if(x === 5){
    console.log("X is 5");
} else {
    console.log("X is not 5");
}




// 23
function calculate(){
    return 42;
}
console.log("This will never Run");



// 24 
let i = 0;
while(i < 5){
    console.log(i);
}


// 25
for(let i=5; i>0; i--){
    console.log(i);
}



// 26
let score2 = 75;
if(score2 >= 90){
    console.log("A");
} else {
    console.log("B");
}



// 27
for(let i=0; i<10; i++){
    console.log(i);
}


// 28
let role = "admin";
switch(role){
    case "user":
    console.log("User Access");
    break;
    case "guest":
    console.log("Guest Access");
    break;
    default:
    console.log("Unknown role");
}


// 29
let isMember = true;
let hasDiscount = true;
if(isMember || hasDiscount){
    console.log("Discount applied");
}



// 30
const numbers2 = [1,2,3];
for(const index in numbers2){
    console.log(numbers2[index]);
}



// 31
let status = "Complete";
switch(status){
    case 'Complete':
    console.log("Completed");
    break;
    default:
    console.log("Not Completed")
}


// 32
for(let i=0; i<5; i++){
    if(i === 2){
        console.log(i);
    }
}



// 33
let num = 5;
if(num > 3){
    console.log("Greaterthan 3");
} else {
    console.log("End Of CHeck");
}



// 34
const items2 = [1,2,3];
items2.forEach(item => {
    if(item === 2)
    console.log(item);
})



// 35
let count = 0;
while(count < 3){
    count = count + 2;
    console.log(count);
}




// 36
let temp = 30;
if(temp > 40){
    console.log("Very hot");
} else if(temp > 20){
    console.log("Warm");
} else {
    console.log("Cool");
}
 

// 37
let age = 18;
let message2 = age >= 18 ? console.log("Adult") : "Minor";



// 38
let n = 0;
do{
    console.log(n);
} while(n++ < 0){
    console.log(n);
}



// 39
let isOpen = 1;
if(isOpen == 1){
    console.log("Open")
} else {
    console.log("Close")
}

 

// 40
let strNum = "5";
if(strNum == 5){
    console.log("Equal");
} else {
    console.log("Not Equal")
}