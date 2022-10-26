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

let userFullName = userFirstName + userLastName;
let userPassword = userFullName + userColor + "21";

const paragrafo = document.getElementById("UserDescription");
paragrafo.innerHTML = `L'utente si chiama ${userFullName} e il suo colore preferito è ${userColor}`;

const password = document.getElementById("Password");
password.innerHTML = `La Password generata è: <em>${userPassword}</em>`;
