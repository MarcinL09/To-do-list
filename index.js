const addButtonElement = document.querySelector('.add');
const inputElement = document.querySelector('#task');

let deleteButton;
let rightArrowButton;
let leftArrowButton;
let newDiv;

const toDo = document.querySelector('.to-do');
const doing = document.querySelector('.doing');
const done = document.querySelector('.done');

function addNewToDo() {
    if (inputElement.value !== '') {
        newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        toDo.append(newDiv);
        newDiv.append(inputElement.value);
        createToolsAreaForToDo();
        inputElement.value = '';
    }
}


function deleteClick(event) {
    event.target.closest('.new-div').remove();
}


function enterKeyCheck(event) {
    if (event.key === 'Enter') {
        addNewToDo();
    }
}

addButtonElement.addEventListener('click', addNewToDo);
inputElement.addEventListener('keyup', enterKeyCheck);