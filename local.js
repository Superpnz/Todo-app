import todoList from "./script.js";

const saveToLocalStorage = (key = "todos") => {
    localStorage.setItem(key, JSON.stringify(todoList));
}

export default saveToLocalStorage