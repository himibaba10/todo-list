const taskInput = document.getElementById("new-task");
const taskForm = document.forms[0];
const incompleteTasksWrapper = document.getElementById("items");
let incompleteTasks = incompleteTasksWrapper.getElementsByClassName("item");
const completedTasks = document.querySelector(".complete-list ul");

const createTask = (task) => {
    const newTask = document.createElement("li");
    newTask.className = "item";
    newTask.innerHTML = `
    <input type="checkbox" /><label>${task}</label>
    `;
    incompleteTasksWrapper.appendChild(newTask);
    return newTask;
}

const addTask = e => {
    e.preventDefault();
    let newTask = createTask(taskInput.value);
    taskInput.value = "";
    // Bind incomplete items
    bindIncompleteItems(newTask, completeTask);
}

const deleteTask = function(){
    const taskItem = this.parentNode;
    taskItem.remove();
}

let completeTask = function(){
    let taskItem = this.parentNode;
    const checkbox = taskItem.querySelector("input[type='checkbox']");
    taskItem.removeChild(checkbox);
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerText = "Delete";
    taskItem.appendChild(deleteBtn);
    completedTasks.appendChild(taskItem);
    bindCompleteItems(taskItem, deleteTask);
}

const bindIncompleteItems = function(taskItem, checkboxClick) {
    let checkbox = taskItem.querySelector("input[type='checkbox']");
    checkbox.onchange = checkboxClick;
}

const bindCompleteItems = (taskItem, deleteButtonClick) => {
    let deleteButton = taskItem.querySelector(".delete");
    deleteButton.onclick = deleteButtonClick;
}

for(let itemTask of incompleteTasks){
    bindIncompleteItems(itemTask, completeTask);
}

for(let itemTask of completedTasks.children){
    bindCompleteItems(itemTask, deleteTask);
}

taskForm.addEventListener("submit", addTask);