const userFirstName = prompt("Insert your first name");
const userLastName = prompt("Insert your last name");
const userColor = prompt("Insert your favourite color");

console.log("First name:", userFirstName);
console.log("Typology:", typeof userFirstName);

console.log("Last name:", userLastName);
console.log("Typology:", typeof userLastName);

console.log("Favourite color:", userColor);
console.log("Typology:", typeof userColor);

const userFullInfo21 = document.getElementById("UserInfo");
userFullInfo21.innerHTML = userFirstName + userLastName + userColor + "21";