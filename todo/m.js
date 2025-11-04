const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});


function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleDone(this)">${text}</span>
    <button class="delete-btn" onclick="deleteTask(this)">✖</button>
  `;
  
  taskList.appendChild(li);
  input.value = "";
}

function toggleDone(el) {
  el.parentElement.classList.toggle("done");
}

function deleteTask(btn) {
  btn.parentElement.remove();
}
