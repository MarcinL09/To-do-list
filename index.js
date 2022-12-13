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
let newDivChild;

const toDo = document.querySelector('.to-do');
const doing = document.querySelector('.doing');
const done = document.querySelector('.done');

function addNewToDo() {
    if (inputElement.value !== '') {
        newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        newDivChild = document.createElement('div');
        newDivChild.classList.add('new-div-buttons');
        toDo.append(newDiv);
        newDiv.textContent = inputElement.value;
        newDiv.append(newDivChild);
        inputElement.value = '';
    }
    moveNewDivElementToNewSection();
}
function moveNewDivElementToNewSection() {
    // cloned elements
    const clonedNewDiv = newDiv.cloneNode(true);
    const clonedNewDivChild = newDivChild.cloneNode(true);
    const clonedNewDivDoneSection = newDiv.cloneNode(true)
    const clonedNewDivChildDoneSection = newDivChild.cloneNode(true)

    // button elements
    deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    rightArrowButton = document.createElement('button')
    rightArrowButton.classList.add('arrow');
    rightArrowButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

    rightArrowButtonDoingSection = document.createElement('button')
    rightArrowButtonDoingSection.classList.add('arrow');
    rightArrowButtonDoingSection.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

    deleteButtonDoingSection = document.createElement('button');
    deleteButtonDoingSection.classList.add('delete-button-doing');
    deleteButtonDoingSection.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    leftArrowButtonDoingSection = document.createElement('button')
    leftArrowButtonDoingSection.classList.add('left-arrow');
    leftArrowButtonDoingSection.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

    deleteButtonDoneSection = document.createElement('button');
    deleteButtonDoneSection.classList.add('delete-button-done');
    deleteButtonDoneSection.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    leftArrowButtonDoneSection = document.createElement('button')
    leftArrowButtonDoneSection.classList.add('left-arrow-done');
    leftArrowButtonDoneSection.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

    // to-do section
    newDivChild.append(deleteButton);
    newDivChild.append(rightArrowButton);

    rightArrowButton.addEventListener('click', function (){
        doing.append(clonedNewDiv);
        newDiv.remove();
    })
    // doing section

    clonedNewDiv.append(clonedNewDivChild);
    clonedNewDivChild.append(leftArrowButtonDoingSection);
    clonedNewDivChild.append(deleteButtonDoingSection);
    clonedNewDivChild.append(rightArrowButtonDoingSection);

    leftArrowButtonDoingSection.addEventListener('click', function (){
        toDo.append(newDiv);
        clonedNewDiv.remove();
    })
    rightArrowButtonDoingSection.addEventListener('click', function (){
        done.append(clonedNewDivDoneSection);
        clonedNewDiv.remove();
    })

    // done section

    clonedNewDivDoneSection.append(clonedNewDivChildDoneSection);
    clonedNewDivChildDoneSection.append(leftArrowButtonDoneSection);
    clonedNewDivChildDoneSection.append(deleteButtonDoneSection);

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