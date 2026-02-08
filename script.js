let newTask = document.querySelector('#new-task');
let todoUl = document.querySelector('#items')
let form = document.querySelector('form');

let createTask = function(task) {
    let listItem = document.createElement('li');
    let label = document.createElement('label');
    let checkBox = document.createElement('input');

    label.innerText = task;
    checkBox.type = 'checkbox';
    listItem.append(checkBox, label);

    return listItem
}

let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    listItem.value = "";
}

form.addEventListener('submit', addTask);