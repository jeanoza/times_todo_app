const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    finishedList = document.querySelector(".js-finishedList")

const TODOS_LS = 'toDos';
const FINISHEDS_LS = 'finisheds';

let toDos = [];
let finisheds = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); 
    const cleanToDos = toDos.filter((toDo) => (
        toDo.id !== parseInt(li.id)));
    toDos = cleanToDos;
    saveToDos();
}
function deleteFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);
    const cleanFinisheds = finisheds.filter(function (finished) {
        return finished.id !== parseInt(li.id);
    });
    finisheds = cleanFinisheds;
    saveFinisheds();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function saveFinisheds() {
    localStorage.setItem(FINISHEDS_LS, JSON.stringify(finisheds));
}

function moveToToDo(event) {
    const liToMove = event.target.parentNode,
        text = liToMove.querySelector("span").textContent;
    finishedList.removeChild(liToMove);

    const cleanFinisheds = finisheds.filter(function (finished) {
        return finished.id !== parseInt(liToMove.id);
    });
    finisheds = cleanFinisheds;
    saveFinisheds();
    paintToDo(text, parseInt(liToMove.id));

}
function moveToFinished(event) {
    const liToMove = event.target.parentNode,
        text = liToMove.querySelector("span").textContent;
    toDoList.removeChild(liToMove);

    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(liToMove.id);
    });
    toDos = cleanToDos;
    saveToDos();
    paintFinished(text, parseInt(liToMove.id));
}

function paintFinished(text, id) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const moveBtn = document.createElement("button");
    const span = document.createElement("span");
    
    span.innerText = text;
    delBtn.innerText = "❌";
    moveBtn.innerText = "⏪";

    delBtn.addEventListener("click", deleteFinished);
    moveBtn.addEventListener("click", moveToToDo);

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(moveBtn);
    li.id = id;
    finishedList.appendChild(li);
    const finishedObj = {
        text: text,
        id: id
    }
    finisheds.push(finishedObj);
    saveFinisheds();

}
function paintToDo(text, id) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const moveBtn = document.createElement("button");
    const span = document.createElement("span");
    
    span.innerText = text;
    delBtn.innerText = "❌";
    moveBtn.innerText = "✅";

    delBtn.addEventListener("click", deleteToDo);
    moveBtn.addEventListener("click", moveToFinished);


    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(moveBtn);
    li.id = id;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: id
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    toDoInput.value = "";
    paintToDo(currentValue, Date.now());
    

}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    const loadedFinisheds = localStorage.getItem(FINISHEDS_LS);
    if (loadedToDos) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text, toDo.id);
        });
    }
    if (loadedFinisheds) {
        const parsedFinisheds = JSON.parse(loadedFinisheds);
        parsedFinisheds.forEach(function (finished) {
            paintFinished(finished.text, finished.id);
        });
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();