/* Criteria:
- create a todo list project
- need an input to submit new todos
- under input add each todo to a list
- remove todos by clicking on the cross ([X])
*/

const todoForm = document.querySelector(".todoForm");
const todoFormInput = document.querySelector(".todoFormInput");
const todoList = document.querySelector(".todoList");

// Hitting 'Enter'
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // create and store our todo
  const todo = document.createElement("div");

  todo.innerHTML =
    "<span> - " +
    todoFormInput.value +
    "</span>" +
    "<span class='deleteTodo'>" +
    " [X]" +
    "</span>";

  // This can also be written as:
  // todo.innerHTML = `<span> - ${todoFormInput.value}</span><span class='deleteTodo'> [X]</span>`;
  // |- this method is cleaner!

  // add to list
  todoList.appendChild(todo);

  const deleteButton = todo.querySelector(".deleteTodo");

  // Clicking '[X]'
  deleteButton.addEventListener("click", () => {
    // deletes specfied todo
    deleteButton.parentElement.remove();
    console.log("Deleted");
  });

  // sets input placeholder value back to empty
  todoFormInput.value = "";
});
