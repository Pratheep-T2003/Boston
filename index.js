import { boston } from "./boston.js";

let data = boston.data;
let top = [];

for (let i = 0; i < data.length; i++) {
  if (data[i][11] <  200000) {
    top.push({ name: data[i][8], salary: data[i][11] });
  }
}

top.sort((a, b) => b.salary - a.salary);

console.log(top);

document.getElementById("app").innerHTML = `<h2>Top 5 Earners:</h2>`;
for (let i = 0; i < 5; i++) {
  document.getElementById("app").innerHTML += `<h3>${i + 1}. ${top[i].name} - Salary: ${top[i].salary}</h3>`;
}


// import { boston } from "./boston.js";

// let data = boston.data;
// let top = [];

// // Collect earners with salaries of 200,000 or more
// for (let i = 0; i < data.length; i++) {
//   if (data[i].length > 11 && data[i][11] >= 200000) {
//     top.push({ name: data[i][8], salary: data[i][11] });
//   }
// }

// // Sort the earners by salary in descending order to find the highest salaries
// top.sort((a, b) => b.salary - a.salary);

// // Display the top earners
// const appElement = document.getElementById("app");
// if (appElement) {
//   appElement.innerHTML = `<h2>Employees Earning $200,000 or More:</h2>`;
//   for (let i = 0; i < Math.min(5, top.length); i++) {
//     appElement.innerHTML += `<h3>${i + 1}. ${top[i].name} - Salary: $${top[i].salary.toLocaleString()}</h3>`;
//   }
// } else {
//   console.error("Element with ID 'app' not found.");
// }