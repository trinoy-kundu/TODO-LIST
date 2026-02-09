let newTask = document.querySelector('#new-task');
let todoUl = document.querySelector('#items')
let form = document.querySelector('form');
let completeUl = document.querySelector('.complete-todo-list ul');

let createTask = function(task) {
    let listItem = document.createElement('li');
    let label = document.createElement('label');
    let checkBox = document.createElement('input');

    label.innerText = task;
    checkBox.type = 'checkbox';
    listItem.append(checkBox, label);

    return listItem;
}

let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    listItem.value = "";
    bindInCompleteItems(listItem, completeTask)
}

let bindInCompleteItems = function(listItem, checkBoxClick) {
    let boxChecked = listItem.querySelector('input[type="checkbox"]');
    boxChecked.onchange = checkBoxClick;
}

let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
}

form.addEventListener('submit', addTask);