function addItem() {
    const newItemInput = document.getElementById("newItemInput");
    const todoList = document.getElementById("todoList");

    const newItem = document.createElement("li");
    newItem.innerHTML = `
        <input type="checkbox" onchange="markAsDone(this)">
        <span>${newItemInput.value}</span>
        <button class="delete" onclick="deleteItem(this)"><img src="icons8-отходы-50.png" width=25px></button>
    `;

    todoList.appendChild(newItem);
    newItemInput.value = "";
}

function markAsDone(checkbox) {
    const itemText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        itemText.style.textDecoration = "line-through";
    } else {
        itemText.style.textDecoration = "none";
    }
}

function deleteItem(button) {
    const listItem = button.parentNode;
    listItem.remove();
}