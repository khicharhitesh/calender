// let x = [1,2,3];
// x[0] = 4;
// console.log(x);

// map method

// Given an array of strings, return a new array where each string is in uppercase.

// let arr = ["hitesh","khichar"];
// let uppercaseArray = arr.map((str) =>str.toUpperCase());
// console.log(uppercaseArray);

// You have an array of objects, each representing a person with a name and age. Return an array of only their names using map().

// let personDetails = [
//     {name : "hitesh",age : 35},
//     {name : "bob",age : 23},
//     {name : "jake",age : 43},
//     {name : "kole",age : 53},
// ]
// let name = personDetails.map((str) => str.name);
// console.log(name);

// Given an array of temperatures in Celsius, return an array with temperatures converted to Fahrenheit.
// Formula: F = (C * 9/5) + 32

// let arr = [2,4,7,2,7,4,2]

// let ans = arr.map((element) => {
//    let  F = (element * 9/5) + 32
//    return F
// })
// console.log(ans);

// 4. Problem: Given an array of prices and a discount percentage, return an array of prices after the discount is applied.
// const prices = [100, 200, 300];
// const discount = 20; // 20% discount
// Output: [80, 160, 240]

// let arr  = [100,200,300]
// let discount = [20]
// let ans = arr.map((element) => {
//     let price = (element * discount / 100)
//     return price
// }
// )
// console.log(ans);

// filterMethod

// Given an array of objects, print the name of each and every object of the array who is having age 23.
// let data = [
//     {
//         name: "Rahul",
//         surname: "Kumar",
//         age: 23,
//     },
//     {
//         name: "Rohit",
//         surname: "Kumar",
//         age: 24,
//     },
//     {
//         name: "Raj",
//         surname: "Kumar",
//         age: 25,
//     },
//     ];

// let age = data.filter((element) => element.age===23)
// console.log(age);

// Given an array of objects representing products, write a function filterAffordableProducts to filter out products whose price is less than $100.

// let price =  [
//     { name: "Laptop", price: 900 },
//     { name: "Mouse", price: 25 },
//     { name: "Keyboard", price: 50 },
//     { name: "Monitor", price: 150 },
// ]

// let filterPrice = price.filter((element) => element.price<100)
// console.log(filterPrice);

// Filter Strings with a Specific Length
// Write a function filterByLength that filters an array of strings to include only those strings that have a length greater than 4.

// let str =  ["apple", "cat", "banana", "dog", "grape"]
// let ans = str.filter((element) => element.length>4)
// console.log(ans);

// some and every method

// Checking if any number is even
// let num = [23,45,23,45,24,24]
// let ans = num.some((element) => element%2 != 0)
// console.log(ans);

// Checking if all elements in an array are strings

// let myarr= ["hello",45,"lol"]
// let ans = myarr.every((element) => typeof element === 'string')
// console.log(ans);

// Write a function that checks if any passwords in an array are shorter than 8 characters using some().

// let password = ["bob","kole","khichar089y4"]
// let ans = password.some((element) => element.length<8)
// console.log(ans);

// Given an array of numbers, use the some() method to check if at least one number is divisible by both 3 and 5

// let arr = [15 ,25,27 ,40];
// let ans = arr.some((element)=> element%3===0 && element%5===0)
// console.log(ans);

// Write a function that takes an array of ages and checks if there are any minors (age < 18) using some().

// let age  = [ 12,28,45,10];
// let ans = age.some((element)=>element<18)
// console.log(ans);

// 6. Use the some() method to check if any item in a shopping cart array has a quantity of 0.
// const cart = [{item: "apple", quantity: 3}, {item: "banana", quantity: 0}];

// let cart = [
//     {item:"apple",quantity:3},
//     {item :"banana",quantity:0},
// ]
// let ans = cart.filter((element) => element.quantity === 0)
// console.log(ans);

// Write a function to check if an array contains any null or undefined values using some().

// let arr = [0,34,12,69];
// let ans = arr.some((element) => element===undefined && element===null)
// console.log();

// Given an array of student objects, use the find() method to locate the student with a specific name.
// const students = [{name: "John", grade: 85}, {name: "Jane", grade: 92}];

// let name = [
//     {name: "John", grade: 85},
//     {name: "Jane", grade: 92},
// ]

// let names = name.map((element) => element.name)
// console.log(names);

// Given an array of objects representing employees, use the find() method to locate the first employee who has a salary greater than $50,000

// let data = [
//         {
//             name: "Rahul",
//             surname: "Kumar",
//             salary: 23000,
//         },
//         {
//             name: "Rohit",
//             surname: "Kumar",
//             salary: 24000,
//         },
//         {
//             name: "Raj",
//             surname: "Kumar",
//             salary: 60000,
//         },
//         ];

//     let salary = data.filter((element) => element.salary>50000)
//     console.log(salary);

// reduce method

// let num = [1,2,3,4,5]
// let ans = num.reduce((acc,cur) => acc*cur)
// console.log(ans);

// let data = [
//             {
//                 name: "Rahul",
//                 surname: "Kumar",
//                 salary: 23000,
//             },
//             {
//                 name: "Rohit",
//                 surname: "Kumar",
//                 salary: 24000,
//             },
//             {
//                 name: "Raj",
//                 surname: "Kumar",
//                 salary: 60000,
//             },
//             ];

//         let salary = data.find((element) => element.salary>50000)
//         console.log(salary);

// let name = [
//         {name: "John", grade: 85},
//         {name: "Jane", grade: 92},
//     ]

//     let names = name.find((element) => element.name == "Jane")
//     console.log(names);

// Use the find() method to locate the first prime number in an array of numbers.

// let arr = [1, 2, 34, 56, 75];
// let ans = arr.find((number)=>{
//     let count = 0;
//     for (let index = 1; index <= number; index++) {
//       if (number % index == 0) {
//         count++;
//       }
//     }
//     if (count == 2) {
//       return true;
//     }
//   }
//   );
// console.log(ans);


// 1. Use `map` to Transform an Array of Objects  
// Task: Given an array of products with properties `name` and `price`, create a new array containing only the names of products that cost more than 100.  

// Input:  
// [{name: "A", price: 120}, {name: "B", price: 90}, {name: "C", price: 150}]
  
// Output: `["A", "C"]`

// let name = [{name: "A", price: 120}, {name: "B", price: 90}, {name: "C", price: 150}]
  
//       let names = name.filter((element) => element.price >100).map(element=>element.name)
//       console.log(names);


// 2. Use `filter` to Find Strings Ending with a Particular Letter  
// Task: Filter out words from the array that end with the letter `e`.  
// Input:  
// ["apple", "banana", "grape", "orange"]
  
// Output: `["banana", "orange"]`

// let fruits = ["apple", "banana", "grape", "orange"]
// let fruit = fruits.filter((element) => element.endsWith("e"))
// console.log(fruit);


// 3. Use `some` to Check if Any Object Matches a Condition  
// Task: Check if any product in the array has a discount of 50% or more.  
// Input:  
// [{price: 200, discount: 10}, {price: 300, discount: 50}, {price: 150, discount: 20}]
  
// Output: `true`

// let price = [{price: 200, discount: 10}, {price: 300, discount: 50}, {price: 150, discount: 20}]
// let ans = price.some((element) => element.price>50)
// console.log(ans);



// 4. Use `every` to Verify Array Consistency  
// Task: Verify if all numbers in the array are divisible by 3.  
// Input: [9, 12, 15, 27]
// Output: `true`

// let num = [9, 12, 15, 27]
// let ans = num.every((element) => element%3 === 0)
// console.log(ans);

// 5. Use `find` to Locate a Specific Object  
// Task: Find the first product with a price greater than 100.  
// Input:  

// [{name: "A", price: 90}, {name: "B", price: 120}, {name: "C", price: 80}]
  
// Output: `{name: "B", price: 120}`

// let obj = [{name: "A", price: 90}, {name: "B", price: 120}, {name: "C", price: 80}]
// let ans = obj.find((element) => element.name =="B")
// console.log(ans);



// 6. Combine `filter` and `map` for Advanced Transformation  
// Task: Filter out even numbers and return their squares.  
// Input:  
// [1, 2, 3, 4, 5, 6]
  
// Output: `[1, 9, 25


// let input = [1, 2, 3, 4, 5, 6]
// let ans = input.filter((element) => element.)




// 7. Use `every` to Check for String Lengths  
// Task: Check if all strings in the array have a length of at least 5.  
// Input:  
// ["apple", "mango", "grapes", "kiwi"]
  
// Output: `false`


// let fruits = ["apple", "mango", "grapes", "kiwi"]
// let ans = fruits.every((element) => element.length>5)
// console.log(ans);


// 8. Use `some` to Validate Email Addresses  
// Task: Check if at least one string in the array is a valid email (contains `@`).  
// Input:  
// ["example.com", "user@domain.com", "testmail"]
  
// Output: `true`


// let email = ["example.com", "user@domain.com", "testmail"]
// let ans = email.some((element) => element.includes('@'))
// console.log(ans);



// Use `reduce` to Sum an Array of Numbers  
// Task: Calculate the total price of all items in the cart.  
// Input:  
// [{price: 100}, {price: 200}, {price: 300}]
  
// Output: `600`

// let sum = [{price: 100}, {price: 200}, {price: 300}];
// let ans = sum.reduce((acc, current) => acc + current.price, 0);
// console.log(ans); 


// 11. Sum of Numbers in an Array
// Task: Use `reduce` to calculate the sum of all numbers in an array.  
// Input:  
// [1, 2, 3, 4, 5]
  
// Output: `15`


// let num = [1, 2, 3, 4, 5]
// let ans = num.reduce((acc,current) => acc + current,0)
// console.log(ans);

