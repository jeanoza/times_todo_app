const taskForm = document.querySelector(".js-taskForm"),
    taskInput = taskForm.querySelector("input"),
    pendingList = document.querySelector(".js-pending"),
    finishedList = document.querySelector(".js-finished");

const PENDING_LS = "pending",
    FINISHED_LS = "finished";

let pendings = [];
let finisheds = [];

function deleteFinished(event) {
    const finishedDelBtn = event.target,
        li = finishedDelBtn.parentNode;
    finishedList.removeChild(li);
    const cleanFinished = finisheds.filter(function (finished) {
        return finished.id !== parseInt(li.id);
    });
    finisheds = cleanFinished;
    saveFinished();
}
function deletePending(event) {
    const pendingDelBtn = event.target;
    const li = pendingDelBtn.parentNode;
    pendingList.removeChild(li);
    const cleanPendings = pendings.filter(function (pending) {
        return pending.id !== parseInt(li.id);
    });
    pendings = cleanPendings;
    savePending();
}

function saveFinished() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(finisheds));
}
function savePending() {
    localStorage.setItem(PENDING_LS, JSON.stringify(pendings));
}

function moveToFinished(event) {
    const pendingToFinishBtn = event.target,
        liToMove = pendingToFinishBtn.parentNode,
        text = liToMove.querySelector("span").textContent;
    
    pendingList.removeChild(liToMove);
    const cleanPending = pendings.filter(function (pending) {
        return pending.id !== parseInt(liToMove.id);
    });
    pendings = cleanPending;
    savePending();
    paintFinished(text);
}
function moveToPending(event) {
    const finishedToPendingBtn = event.target,
        liToMove = finishedToPendingBtn.parentNode,
        text = liToMove.querySelector("span").textContent;
    
    finishedList.removeChild(liToMove);
    const cleanFinished = finisheds.filter(function (finished) {
        return finished.id !== parseInt(liToMove.id);
    });
    finisheds = cleanFinished;
    saveFinished();
    paintPending(text);
}

function paintFinished(text) {
    const li = document.createElement("li"),
        delBtn = document.createElement("button"),
        moveBtn = document.createElement("button"),
        span = document.createElement("span");
    
    const finishedId = finisheds.length + 1;
   
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteFinished);
    moveBtn.innerText = "⏪";
    moveBtn.addEventListener("click", moveToPending);
    
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(moveBtn);

    li.id = finishedId;
    finishedList.appendChild(li);
    const finishedObj = {
        text: text,
        id:finishedId
    }
    finisheds.push(finishedObj);
    saveFinished();

}

function paintPending(text) {
    const li = document.createElement("li"),
        delBtn = document.createElement("button"),
        moveBtn = document.createElement("button"),
        span = document.createElement("span");
    
    const pendingId = pendings.length + 1;

    
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deletePending);
    moveBtn.innerText = "✅";
    moveBtn.addEventListener("click", moveToFinished);
    
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(moveBtn);

    li.id = pendingId;
    pendingList.appendChild(li);
    const pendingObj = {
        text: text,
        id:pendingId
    }
    pendings.push(pendingObj);
    savePending();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = taskInput.value;
    taskInput.value = "";
    paintPending(currentValue);
}

function loadTask() {
    const loadedPending = localStorage.getItem(PENDING_LS);
    const loadedFinished = localStorage.getItem(FINISHED_LS);
    if (loadedPending) {
        const parsedPending = JSON.parse(loadedPending);
        parsedPending.forEach(function (pending) {
            paintPending(pending.text);
        });
    }
    if (loadedFinished) {
        const parsedFinished = JSON.parse(loadedFinished);
        parsedFinished.forEach(function (finished) {
            paintFinished(finished.text);
        });
        
    }

}
function init() {
    loadTask();
    taskForm.addEventListener("submit", handleSubmit);
}
init();