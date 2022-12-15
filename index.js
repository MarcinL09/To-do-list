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

function addNewToDoAndMoveElement() {
    if (inputElement.value !== '') {
        newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        newDiv.textContent = inputElement.value;

        newDivChild = document.createElement('div');
        newDivChild.classList.add('new-div-buttons');

        toDo.append(newDiv);
        const clone = newDiv.cloneNode(true)
        const clonedNewDiv = newDiv.cloneNode(true);
        const clonedNewDivDone = newDiv.cloneNode(true);
        newDiv.append(newDivChild);
        const cloneChild = newDivChild.cloneNode(true)
        const clonedNewDivChild = newDivChild.cloneNode(true);
        const clonedNewDivChildDone = newDivChild.cloneNode(true);
        createButtonArea();
        toDo.append(clone);
        clone.append(cloneChild);
        clonedNewDiv.append(clonedNewDivChild);
        clonedNewDivDone.append(clonedNewDivChildDone);
        newDiv.remove();
        cloneChild.append(deleteButton, rightArrowButton);
        clonedNewDivChild.append(leftArrowButtonDoingSection, deleteButtonDoingSection, rightArrowButtonDoingSection);
        clonedNewDivChildDone.append(leftArrowButtonDoneSection, deleteButtonDoneSection);
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