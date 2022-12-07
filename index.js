const addButtonElement = document.querySelector('.add');
const inputElement = document.querySelector('#task');

let deleteButton;
let rightArrowButton;
let leftArrowButton;
let newDiv;


const toDo = document.querySelector('.to-do');
const doing = document.querySelector('.doing')
function addNewToDo() {
    if (inputElement.value !== '') {
        newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        toDo.append(newDiv);
        newDiv.append(inputElement.value);
        createToolsArea()
        rightArrowButton.addEventListener('click', addNewDoing);
        // leftArrowButton.style.display = 'none';
        inputElement.value = '';
    }
    function addNewDoing() {
        doing.append(newDiv);
        leftArrowButton.addEventListener('click', function(){
            toDo.append(newDiv);
        });
    }
}

console.log(inputElement.value);
function createToolsArea() {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools')
    newDiv.append(toolsPanel);

    deleteButton = document.createElement('button')
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.addEventListener('click', deleteClick);

    rightArrowButton = document.createElement('button')
    rightArrowButton.classList.add('arrow');
    rightArrowButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

    leftArrowButton = document.createElement('button')
    leftArrowButton.classList.add('left-arrow');
    leftArrowButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

    toolsPanel.append(leftArrowButton, deleteButton, rightArrowButton,);
}

function deleteClick(event) {
        event.target.closest('.new-div').remove();
}

// function addNewDoing() {
//     const input = document.querySelector('#task')
//         newDiv = document.createElement('div');
//         newDiv.classList.add('new-div');
//         doing.append(newDiv);
//         newDiv.append(input);
//         createToolsArea()
//     // if leftArrowButton
// }

function enterKeyCheck(e) {
    if (e.key === 'Enter') {
        addNewToDo();
    }
}
addButtonElement.addEventListener('click', addNewToDo);
inputElement.addEventListener('keyup', enterKeyCheck);