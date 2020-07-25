var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");

    // create li tag with text node
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    if (todo_item.value == "") {
        alert("Name must be filled out");
        return false;
    } else {
        li.setAttribute("class", "input");
        li.appendChild(liText);
    }
    // create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class", "delBtn");
    delBtn.setAttribute("onclick", "deleteItems(this)");
    delBtn.appendChild(delText);

    // create edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT");
    editBtn.setAttribute("class", "addBtn");
    editBtn.setAttribute("onclick", "editItems(this)");
    editBtn.appendChild(editText);


    li.appendChild(editBtn);
    li.appendChild(delBtn);

    list.appendChild(li);

    todo_item.value = "";
}

function deleteItems(e) {
    e.parentNode.remove();
}

function editItems(e) {
    var val = (e.parentNode.firstChild.nodeValue);
    var editValue = window.prompt("Enter Edit Value", val)
    e.parentNode.firstChild.nodeValue = editValue;
}

function delAllTodo() {
    list.innerHTML = "";
}