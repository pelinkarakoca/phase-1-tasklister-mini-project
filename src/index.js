document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    addToDo(e.target.new_task_description.value)})
});

function addToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.textContent = 'X';
  btn.addEventListener('click', deleteToDo);
  p.textContent = `${todo} `;
  p.appendChild(btn);
  document.querySelector('ul').appendChild(p);
}

function deleteToDo(e) {
    e.target.parentNode.remove();
}