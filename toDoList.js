var inputText = document.getElementById('task');
var addButton = document.getElementById('button');
var list = document.getElementById('list');
var item, container, para, delButton, editButton, elDel, elEdit;

// This function takes care of deleting a list item
function deleteListItem() {
    var li = this.parentNode.parentNode;
    li.remove();
}

// This function takes care of marking a list item as complete
function completedTask() {
    var elComplete = this.parentNode.parentNode;
    elComplete.classList.add('complete');
}

//This function takes care of adding an item in list
function addItem(e) {

    item = document.createElement('li');
    item.setAttribute('class', 'item');

    container = document.createElement('div');
    container.setAttribute('class', 'cont');

    //create text in listitem
    para = document.createElement('p');
    para.setAttribute('class', 'text');
    para.setAttribute('id', 'para');

    //create deleteButton
    delButton = document.createElement('button');
    delButton.setAttribute('class', 'btn btn-primary deletebutton');
    delButton.setAttribute('id', 'del');
    delButton.addEventListener('click', deleteListItem);

    //create donebutton 
    doneButton = document.createElement('button');
    doneButton.setAttribute('class', 'btn btn-primary donebutton');
    doneButton.setAttribute('id', 'done');
    doneButton.addEventListener('click', completedTask);

    item.appendChild(container);
    para.textContent = inputText.value;
    delButton.textContent = 'DELETE';
    doneButton.textContent = 'DONE';

    // Loop for adding text, deleteButton and doneButton in list item
    elements = [para, delButton, doneButton];
    for (var i = 0; i < elements.length; i++) {
        container.appendChild(elements[i]);
    }
    list.appendChild(item);
    inputText.value = "";
}

addButton.addEventListener('click', addItem);