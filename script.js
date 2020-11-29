const addBtn = document.querySelector('.addBtn');
const toDoDisplay = document.querySelector('.todo-list');
const list = [];

// Displays the list on the page
function showList(e) {
  // checks if there is anything in the array
  // if there isn't it displays a message
  if (list.length === 0) {
    document.querySelector('.todo-list').innerHTML = ` 
    <p class="no-display">Looks like there's nothing to do...</p>`;
  } else {
    // prints out the contents of the todo list
    toDoDisplay.textContent = '';
    for (let i = 0; i < list.length; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = list[i];
      toDoDisplay.appendChild(li);
    }
  }
}

// adds items to the list
function addToDo() {
  const title = document.querySelector('.title').value;

  list.push(`<p>${title}</p>`);

  console.log(list);
}

addBtn.addEventListener('click', () => {
  addToDo();
  showList();
});

window.onload = showList(list);
