const form = document.getElementById("form");
const input = document.getElementById("todoInput");
const ul = document.getElementById("todoList");
let data = JSON.parse(localStorage.getItem("todos")) || [];

// ✅ Gespeicherte Todos beim Start laden
data.forEach(text => renderTodo(text));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value;
    if(text === "") return;

    data.push(text);
    localStorage.setItem("todos", JSON.stringify(data));
    renderTodo(text);
    input.value = ""; // ✅ Input leeren
});

function renderTodo(text) {
    const li = document.createElement("li");
    li.className = "list";
    li.innerHTML = `
        <input type="checkbox">
        ${text}
        <a href="#" class="deletebtn"> [Löschen] </a>
    `;
    ul.appendChild(li);

    li.querySelector(".deletebtn").addEventListener("click", (e) => {
        e.preventDefault();
        li.remove();
        const index = data.indexOf(text);
        if (index !== -1) {
            data.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(data));
        }
    });
}


