const addButtonElement = document.querySelector('.add');
const inputElement = document.querySelector('#task');

let deleteButton;
let rightArrowButton;
let leftArrowButton;
let newDiv;
let clonedNewDiv;

const toDo = document.querySelector('.to-do');
const doing = document.querySelector('.doing');
const done = document.querySelector('.done');

function addNewToDo() {
    if (inputElement.value !== '') {
        newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        toDo.append(newDiv);
        newDiv.textContent = inputElement.value;
        inputElement.value = '';
    }
    moveNewDivElementToDoingSection()
}
function moveNewDivElementToDoingSection() {

    rightArrowButton = document.createElement('button')
    rightArrowButton.classList.add('arrow');
    rightArrowButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
    newDiv.append(rightArrowButton);
    const clonedNewDiv = newDiv.cloneNode(true);
    clonedNewDiv.classList.add('new-div')

    deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    newDiv.append(deleteButton);

    leftArrowButton = document.createElement('button')
    leftArrowButton.classList.add('left-arrow');
    leftArrowButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

    rightArrowButton.addEventListener('click', function (){
        const clonedNewDiv = newDiv.cloneNode(true);
        doing.append(clonedNewDiv);
        newDiv.remove();
    })

    deleteButton.addEventListener('click', deleteClick);
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