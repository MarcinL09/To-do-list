const addButtonElement = document.querySelector('.add');
const inputElement = document.querySelector('#task');

let newDiv;

const toDo = document.querySelector('.to-do');
function addNewToDo() {
    if (inputElement.value !== '') {
        newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        toDo.append(newDiv);
        newDiv.append(inputElement.value);
        createToolsArea()

        inputElement.value = '';
    }
}

function createToolsArea() {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools')
    newDiv.append(toolsPanel);

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    const arrowButton = document.createElement('button')
    arrowButton.classList.add('arrow');
    arrowButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

    toolsPanel.append(deleteButton, arrowButton);
}


function enterKeyCheck(e) {
    if (e.key === 'Enter') {
        addNewToDo();
    }
}
addButtonElement.addEventListener('click', addNewToDo);
inputElement.addEventListener('keyup', enterKeyCheck);