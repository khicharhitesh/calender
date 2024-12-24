const num = 45;
const promise =new Promise((resolve,reject)=>{
    if(num%2==0){
        resolve()
    }else{
        reject()
    }
})
promise
    .then(() => {
        console.log("even");
    })
    .catch(() => {
        console.log("odd");
    });