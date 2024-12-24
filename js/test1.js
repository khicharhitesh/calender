
        // let str = "hello world here";
        // let reversedStr = reverse(str);
        // console.log(reversedStr);
        
    //     for(let i = 0;i>=10;i--){
    //     console.log(i);
    //    }

    // let foodItems = [ "apple","orange","santar","kela","potato"];
    //  foodItems.push("chips");
    //   console.log(foodItems);

    // let name = "hello world here";
    // reverse = name.split('').reverse('').join('');
    
    // console.log(reverse);

//     let arr = [122,45,45,45,43,24,234,234,2,42,423.50,60,30];
//     for(let val of arr){
//         console.log(val); 
// }
 
// let arr = [12,34,56,345,34,24,23,24,3];
//     for(let i = 0;i<=arr.length;i++){
//              console.log(arr[i]);
//          }
        
// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// const result = addTwoNumbers(60,9);
// console.log(result); 

// function printtable(a,factorial){
//     for(let i = 0;i<=10;i++){
//         console.log(a*i);
        
//     }


// }

// let myDetails = {
//     name: "hitesh",
//     age: 30,
//     address: "palasana",
//     id: 20,
// };

// console.log(myDetails);
// let key = "naa";
// if (key in myDetails) {
//     console.log(`${key} is Present. Delete ${key}.`);
//     delete myDetails[key]; 
// } else {
//     console.log(`${key} is Absent.`);
// }

//  const n =  Object.keys(myDetails).length 
//  console.log(n);
 

//  let numericValue = {
//     a:1,
//     s:2,
//     d:4,
//     F:5,
// }
// maxi=-9999999999999
// for (data in numericValue){
//     if(maxi<numericValue[data]){
//         maxi=numericValue[data]
//     }
// }
// console.log(maxi);

// Create an object student with properties name, age, and address where address is itself an object containing street, city, and zip.
// let personDetails = {
//     name : "john",
//     age: 30,
//     address:{
//         street : "nagar",
//         city : "Sikar",
//         ward: 1,
//     }
    
    
// };
// console.log(personDetails);

// Create an array students containing three student objects, each with properties name and score.
let students = [
    {name : "hitesh",address:{
        street : "nagar",
        city : "Sikar",
        ward: 1,
    }},
    {name : "piyush",  address:{
        street : "nagar",
        city : "Sikar",
        ward: 1,
    }},
    {name : "surnder",  address:{
        street : "nagar",
        city : "Sikar",
        ward: 1,
    }},

];
for(let i=0;i<students.length;i++){
console.log(students[i].name," ",students[i].address.city);
}

// Write a function to find a student by name in the students array and return their score.

// Using the student object, print the city of the address.
// let personDetails = {
//         name : "john",
//         age: 30,
        // address:{
        //     street : "nagar",
        //     city : "Sikar",
        //     ward: 1,
        // } 
        
        
//     };
//     console.log(personDetails.address.city);

