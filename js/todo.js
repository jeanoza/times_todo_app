const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteTodo(event) {
    console.log(event.target.parentNode);//parentElement too...
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); //{parent_tag}.removeChild({child_tag})
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();

}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //convert JSON(Object) to String
    //cuz, localStorage can't read Object.
}

function paintToDo(text) {
    const li = document.createElement("li"); // create <li> tag
    const delBtn = document.createElement("span");
    const span = document.createElement("label");
    const newId =  toDos.length + 1
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText =  `${text} `;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId; //attribute id in li tag
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        //convert String to JSON
        //console.log(parsedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)


}
init();