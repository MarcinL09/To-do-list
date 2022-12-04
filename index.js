const addButtonElement = document.querySelector('.add');
const inputElement = document.querySelector('#task');
const deleteButton = document.createElement('button');
deleteButton.classList.add('arrow-button');

const toDo = document.querySelector('.to-do');
function addNewToDo() {
    if (inputElement.value !== '') {
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-div');
        toDo.append(newDiv);
        newDiv.append(inputElement.value);
        newDiv.append(deleteButton);

        inputElement.value = '';
    }
}

deleteButton.addEventListener('click', function (){
    .remove();
})

addButtonElement.addEventListener('click', addNewToDo);

function enterKeyCheck(e) {
    if (e.key === 'Enter') {
        addNewToDo();
    }
}

inputElement.addEventListener('keyup', enterKeyCheck);