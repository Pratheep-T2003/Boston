import { boston } from "./boston.js";

let data = boston.data;
let top = [];

for (let i = 0; i < data.length; i++) {
  if (data[i][11] < 200000) {
    top.push({ name: data[i][8], salary: data[i][11] });
  }
}

top.sort((a, b) => b.salary - a.salary);

console.log(top);

document.getElementById("app").innerHTML = `<h2>Top 5 Earners:</h2>`;
for (let i = 0; i < 5; i++) {
  document.getElementById("app").innerHTML += `<h3>${i + 1}. ${top[i].name} - Salary: ${top[i].salary}</h3>`;
}
