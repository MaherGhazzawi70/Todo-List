const form = document.getElementById("form");
const app = document.querySelector(".app");
const Tasks = document.createElement("div");
Tasks.className = "Tasks";
const ul = document.createElement("ul");
app.appendChild(Tasks);
Tasks.appendChild(ul);

let Data = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
    ul.innerHTML = "";
    Data.forEach((element, index) => {
        const li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
        li.addEventListener("click", () => {
            Data.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(Data));
            render();
        });
    });
}

render();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("Task").value;
    Data.push(input);
    localStorage.setItem("tasks", JSON.stringify(Data));
    render();
    document.getElementById("Task").value = "";
});


