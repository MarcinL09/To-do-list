const addButtonElement = document.querySelector('.add');
const inputElement = document.querySelector('#task');
const toDo = document.querySelector('.to-do');
const doing = document.querySelector('.doing');
const done = document.querySelector('.done');

function addNewToDoAndMoveElement() {
    if (inputElement.value !== '') {
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        newDiv.textContent = inputElement.value;

        const newDivChild = document.createElement('div');
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

        deleteButton.addEventListener('click', deleteClick);
        deleteButtonDoingSection.addEventListener('click', deleteClick);
        deleteButtonDoneSection.addEventListener('click', deleteClick);

        rightArrowButton.addEventListener('click', function(event){
            doing.append(clonedNewDiv);
            event.target.closest('.new-div').remove();
        })
        leftArrowButtonDoingSection.addEventListener('click', function (){
            toDo.append(clone);
            clonedNewDiv.remove();
        });
        rightArrowButtonDoingSection.addEventListener('click', function (){
            done.append(clonedNewDivDone);
            clonedNewDiv.remove();
        })
        leftArrowButtonDoneSection.addEventListener('click', function (){
            doing.append(clonedNewDiv);
            clonedNewDivDone.remove();
        })
        inputElement.value = ''
    } else {
        alert('You have to add a task')
    }
}
function createButtonArea() {

    deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button', 'button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    deleteButtonDoingSection = document.createElement('button');
    deleteButtonDoingSection.classList.add('delete-button-doing', 'button');
    deleteButtonDoingSection.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    deleteButtonDoneSection = document.createElement('button');
    deleteButtonDoneSection.classList.add('delete-button-done', 'button');
    deleteButtonDoneSection.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    rightArrowButton = document.createElement('button')
    rightArrowButton.classList.add('arrow', 'button');
    rightArrowButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

    rightArrowButtonDoingSection = document.createElement('button')
    rightArrowButtonDoingSection.classList.add('arrow', 'button');
    rightArrowButtonDoingSection.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

    leftArrowButtonDoingSection = document.createElement('button')
    leftArrowButtonDoingSection.classList.add('left-arrow', 'button');
    leftArrowButtonDoingSection.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

    leftArrowButtonDoneSection = document.createElement('button')
    leftArrowButtonDoneSection.classList.add('left-arrow-done', 'button');
    leftArrowButtonDoneSection.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

    return {
        deleteButton,
        deleteButtonDoingSection,
        deleteButtonDoneSection,
        rightArrowButton,
        rightArrowButtonDoingSection,
        leftArrowButtonDoingSection,
        leftArrowButtonDoneSection,
    }
}

function deleteClick(event) {
    event.target.closest('.new-div').remove();
}

function enterKeyCheck(event) {
    if (event.key === 'Enter') {
        addNewToDoAndMoveElement();
    }
}

addButtonElement.addEventListener('click', addNewToDoAndMoveElement);
inputElement.addEventListener('keyup', enterKeyCheck);