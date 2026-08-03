// Arrow Functions Exercise:

// Write a function that takes 5 params, just return of all params
//save to variable and console log.

// const sumFiveNum = (num1, num2, num3, num4, num5) => {
//   return num1 + num2 + num3 + num4 + num5;
// };

// const result = sumFiveNum(2,1,1,1,4);
// console.log(result);

// ===================================================== //

// If/Else Exercise:

// Create a variable with  teha ge of the person
// use if else to log to consle a message with the following conditions
// smaller than 20 - young
// bigger than 80 - old
// between 20 and 80 - grown up

// Answer:
// const age = 55;

// if (age < 20) {
//   console.log("Young");
// } else if (age > 80) {
//   console.log("Old");
// } else if (age > 20 && age < 80) {
//   console.log("Grown up");
// }

// This can be simplified with an arrow function:
// const ageNumber = (age) => {
//   if (age < 20) {
//     console.log("Young");
//   } else if (age > 80) {
//     console.log("Old");
//   } else if (age > 20 && age < 80) {
//     console.log("Grown up");
//   }
// };

// ageNumber(45);

// ===================================================== //

// Ternary Operator Exercise:

// Objectives:
// create a varianle with username
// write a ternary operator and check
// if username equals 'jack' or 'john' then you return 'admin'
// if it doesn't you return 'user'
// show the result in the console

// Result:
// const username = "john";
// const message = username === "jack" || username === "john" ? "admin" : "user";

// console.log(message);

// ===================================================== //

// Javascript object exercise:

// create a user object with name, role and age
// create a function and provide this object insideas a parameter
// inside function check if the role of the user admin or not. If yes console.log 'give access'

// Result:

// const user = {
//   firstName: "Jack",
//   lastName: "Sparrow",
//   role: "Admin",
//   age: 31,
// };

// const checker = (user) => {
//   if (user.role === "Admin" && user.firstName === "Jack") {
//     console.log("Give Access");
//   } else {
//     console.log("Access Denied");
//   }
// };

// checker(user);

// ===================================================== //

// JAvascript arrays exercise:

// create an array of objects which are posts with title and likes count
// add a new post to the array
// console.log the result

// Results:
// const posts = [
//   { title: "The title", likes: 30 },
//   { title: "Second Title", likes: 1 },
//   { title: "New Title", likes: 22 },
//   { title: "Low Title", likes: 3 },
// ];

// const post = { title: "Title", likes: 86 };

// posts.push(post);

// console.log(posts);

// ===================================================== //

// Javascript error exercise:

// creat a user just with name field
// create a function which returns the role of the user
// provide user in the function and cover the case that user doesnt have a role field when we provide a user inside

// const user = { name: "Jack" };

// const newRole = (user) => {
//   if (user.role === undefined) {
//     console.log(user.role);
//     throw new Error("The user role is blank");
//   }
//   return user.role;
// };

// const result = newRole(user);

// ===================================================== //

// Javascript for loop exercise:

// create an empty array
// create a for loop from 0 - 10
// with every iteration add an object with id (i variable) and name hello_i

// Results:

// const users = [];

// for (let i = 0; i < 10; i++) {
//   users.push({
//     id: i,
//     name: "Hello_" + i,
//   });
// }
// console.log(users);

// ===================================================== //

// Javascript while loop exercise

// create an empty array
// create a while loop until 10
// every iteration add an object with id (i variable) and name hello_i and increase i by 3

// Results:

// const users = [];

// let i = 0;
// while (i < 10) {
//   users.push({
//     id: i,
//     name: "Hello_" + i,
//   });
//   i += 3;
// }
// console.log(users);

// ===================================================== //

// Javascript Class Exercise:

// create a class Article which gets and ID and a title while creation
// add a method getTiotle which returns a title
// crete a News class which is based on Article class
// it must get a source as an asdditional parameter
// create a method getSource which returns a source of the News

// Results:

// class Article {
//   constructor(ID, title) {
//     this.ID = ID;
//     this.title = title;
//   }

//   getTitle() {
//     return this.title;
//   }
// }

// const article = new Article("1", "Learning JS");
// console.log(article.getTitle());

// class News extends Article {
//   constructor(ID, title, source) {
//     super(ID, title);
//     this.source = source;
//   }

//   getSource() {
//     return this.source;
//   }
// }

// const news = new News("2", "JS", "Wikipedia");
// console.log(news.getSource());

// ===================================================== //

// Button clicker using EventListeners

const list = document.querySelector(".list");

const button = document.querySelector(".listButton");

button.addEventListener("click", () => {
  const newElement = document.createElement("div");
  newElement.setAttribute("id", "1");
  newElement.innerText = "We created it in JS";
  list.appendChild(newElement);
});

// ===================================================== //

// Register Form in Javascript

const registerForm = document.querySelector(".registerForm");
const emailInput = document.querySelector(".emailInput");
const usernameInput = document.querySelector(".usernameInput");
const passwordInput = document.querySelector(".passwordInput");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const errorMessages = document.querySelectorAll(".errorMessage");
  errorMessages.forEach((errorMessage) => {
    errorMessage.remove();
  });

  if (emailInput.value === "") {
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("errorMessage");
    errorMessage.innerText = "Email is empty";
    emailInput.parentNode.appendChild(errorMessage);
  }

  if (usernameInput.value === "") {
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("errorMessage");
    errorMessage.innerText = "Username is empty";
    usernameInput.parentNode.appendChild(errorMessage);
  }

  if (passwordInput.value === "") {
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("errorMessage");
    errorMessage.innerText = "Password is empty";
    passwordInput.parentNode.appendChild(errorMessage);
  }

  console.log(
    "submit",
    emailInput.value,
    usernameInput.value,
    passwordInput.value,
  );
});

// ===================================================== //
