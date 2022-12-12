const addButtonElement = document.querySelector('.add');
const inputElement = document.querySelector('#task');

let deleteButton;
let rightArrowButton;
let deleteButtonDoingSection;
let rightArrowButtonDoingSection;
let leftArrowButtonDoingSection;
let deleteButtonDoneSection;
let leftArrowButtonDoneSection;
let newDiv;

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
    moveNewDivElementToNewSection()
}
function moveNewDivElementToNewSection() {
    const clonedNewDiv = newDiv.cloneNode(true);
    const clonedNewDivDoneSection = newDiv.cloneNode(true);
    rightArrowButton = document.createElement('button')
    rightArrowButton.classList.add('arrow');
    rightArrowButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
    newDiv.append(rightArrowButton);

    deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    newDiv.append(deleteButton);

    rightArrowButton.addEventListener('click', function (){
        doing.append(clonedNewDiv);
        newDiv.remove();
    })
    // doing section

    rightArrowButtonDoingSection = document.createElement('button')
    rightArrowButtonDoingSection.classList.add('arrow');
    rightArrowButtonDoingSection.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

    deleteButtonDoingSection = document.createElement('button');
    deleteButtonDoingSection.classList.add('delete-button');
    deleteButtonDoingSection.innerHTML = '<i class="fa-solid fa-trash-can"></i>';


    leftArrowButtonDoingSection = document.createElement('button')
    leftArrowButtonDoingSection.classList.add('left-arrow');
    leftArrowButtonDoingSection.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

    clonedNewDiv.append(deleteButtonDoingSection);
    clonedNewDiv.append(rightArrowButtonDoingSection);
    clonedNewDiv.append(leftArrowButtonDoingSection);
    leftArrowButtonDoingSection.addEventListener('click', function (){
        toDo.append(newDiv);
        clonedNewDiv.remove();
    })
    rightArrowButtonDoingSection.addEventListener('click', function (){
        done.append(clonedNewDivDoneSection);
        clonedNewDiv.remove();
    })

    // done section
    deleteButtonDoneSection = document.createElement('button');
    deleteButtonDoneSection.classList.add('delete-button');
    deleteButtonDoneSection.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    leftArrowButtonDoneSection = document.createElement('button')
    leftArrowButtonDoneSection.classList.add('left-arrow');
    leftArrowButtonDoneSection.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

    clonedNewDivDoneSection.append(deleteButtonDoneSection);
    clonedNewDivDoneSection.append(leftArrowButtonDoneSection);

    leftArrowButtonDoneSection.addEventListener('click', function(){
        doing.append(clonedNewDiv);
        clonedNewDivDoneSection.remove();
    })

    deleteButtonDoneSection.addEventListener('click', deleteClick)
    deleteButtonDoingSection.addEventListener('click', deleteClick)
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