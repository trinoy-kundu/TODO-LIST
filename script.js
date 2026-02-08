let createTask = function(task) {
    let listItem = document.createElement('li');
    let label = document.createElement('label');
    let checkBox = document.createElement('input');

    label.innerText = task;
    checkBox.type = 'checkbox';
    listItem.append(checkBox, label);
    
    return listItem
}
