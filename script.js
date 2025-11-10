import saveToLocalStorage from "./local.js";
import createElement from "./domHelpers.js";

const input = document.querySelector("[data-text-field]");
const addTodoBtn = document.querySelector("[data-add-todo-btn]");
const container = document.querySelector("[data-todo-container]");

const todoList = JSON.parse(localStorage.getItem("todos")) || [];

addTodoBtn.addEventListener("click", () => {
    if (input.value.trim()) {
        todoList.push(input.value);
        input.value = "";

        saveToLocalStorage();
        render();
    }
})

const removeTodo = (index) => {
    todoList.splice(index, 1);
    saveToLocalStorage();
    render();
}

const render = () => {
    container.innerHTML = "";
    todoList.forEach((todo, index) => {
        const todoElement = createElement("div", todo);
        const removeBtn = createElement("button", "❌");
        
        removeBtn.addEventListener("click", () => removeTodo(index));

        todoElement.classList.add("todo-item");
        removeBtn.classList.add("remove-btn");
        todoElement.append(removeBtn);
        
        container.append(todoElement);
    })
}

render();

export default todoList