const template = document.querySelector("#todo-template");
const addNewTodo = document.getElementById("add-new-todo");
const list = document.getElementById("list");
const textInput = document.getElementById("textInput");

function deleteTodo(e) {
  e.target.closest("li").remove();
}
addNewTodo.addEventListener("click", () => {
  const value = textInput.value.trim();
  value
    ? (() => {
        const clone = template.content.cloneNode(true);
        const p = clone.querySelector("p");
        const done = clone.querySelector("#done");
        const deleteBtn = clone.querySelector("#delete");
        p.textContent = value;
        done.addEventListener("click", () => {
          p.classList.toggle("done-task");
        });
        deleteBtn.addEventListener("click", deleteTodo);
        list.appendChild(clone);
        textInput.value = "";
      })()
    : alert("Nimadir yozing axir.");
});
