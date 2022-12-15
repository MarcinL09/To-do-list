const addButtonElement = document.querySelector('.add');
const inputElement = document.querySelector('#task');
const toDo = document.querySelector('.to-do');
const doing = document.querySelector('.doing');
const done = document.querySelector('.done');

let deleteButton;
let rightArrowButton;
let deleteButtonDoingSection;
let rightArrowButtonDoingSection;
let leftArrowButtonDoingSection;
let deleteButtonDoneSection;
let leftArrowButtonDoneSection;
let newDiv;
let newDivChild;

function addNewToDo() {
    if (inputElement.value !== '') {
        newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        newDiv.textContent = inputElement.value;

        newDivChild = document.createElement('div');
        newDivChild.classList.add('new-div-buttons');

        toDo.append(newDiv);
        newDiv.append(newDivChild);

        inputElement.value = '';
        for (let i = 0; i < newDiv.length; i++) {
            newDiv[i].addEventListener("click", moveNewDivElementToNewSection);
        };
    } else {
        alert('You have to add a task')
    }

}
function createButtonArea() {
    deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    deleteButtonDoingSection = document.createElement('button');
    deleteButtonDoingSection.classList.add('delete-button-doing');
    deleteButtonDoingSection.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    deleteButtonDoneSection = document.createElement('button');
    deleteButtonDoneSection.classList.add('delete-button-done');
    deleteButtonDoneSection.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    rightArrowButton = document.createElement('button')
    rightArrowButton.classList.add('arrow');
    rightArrowButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

    rightArrowButtonDoingSection = document.createElement('button')
    rightArrowButtonDoingSection.classList.add('arrow');
    rightArrowButtonDoingSection.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

    leftArrowButtonDoingSection = document.createElement('button')
    leftArrowButtonDoingSection.classList.add('left-arrow');
    leftArrowButtonDoingSection.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

    leftArrowButtonDoneSection = document.createElement('button')
    leftArrowButtonDoneSection.classList.add('left-arrow-done');
    leftArrowButtonDoneSection.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
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