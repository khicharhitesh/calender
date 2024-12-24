

const month = document.querySelector("#month");
const day = document.querySelector(".var");
const tarik = document.querySelector(".tarik");
const year = document.querySelector(".year");



function updateDate() {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
     tarik.textContent = date.getDate();
     month.textContent = months[date.getMonth()];
     year.textContent = date.getFullYear();
     day.textContent = daysOfWeek[date.getDay()];
     console.log(day.textContent);
     

     
     


}

updateDate();
