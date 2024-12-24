// function countProperties(obj) {
//     let count = 0; 
//     for (let key in obj) { 
//         if (obj.hasOwnProperty(key)) { 
//             count++;
//         }
//     }
//     return count; 
// }

// const input = {a: 1, b: 2, c: 3};
// console.log(countProperties(input));


// function filterTopStudents(students, minScore) {
//         return students.filter(student => student.score > minScore);
//     }
//     let studentsArray = [
//         { name: 'Alice', score: 85 },
//         { name: 'Bob', score: 70 },
//         { name: 'Charlie', score: 90 }
//     ];
//     let minScore = 80;
//     let topStudents = filterTopStudents(studentsArray, minScore);
//     console.log(topStudents);
    

// function swapKeyValue(obj) {
//     ans={}
//     for( const key in obj){
//         ans[obj[key]] = key

//     }
//     console.log(ans);
    
// }
// let input = {a: 1, b: 2, c: 3};
// swapKeyValue(input);
 

// function getAllKeys(arr) {
//     const uniqueKeys = new Set();
//     arr.forEach(obj => {
//         Object.keys(obj).forEach(key => uniqueKeys.add(key));
//     });
    
//     console.log(Array.from(uniqueKeys));
// }
// const input = [{ a: 1, b: 2 }, { a: 3, c: 4 }, { d: 5 }];
// getAllKeys(input);
 

// let input = [0,1,3,4,5 ,30]
// let ans = input.filter((element) =>element<30)
// console.log(ans);

funtion rum(){
    console.log("hello world");
     
}
let result = rum()
console.log(result);
