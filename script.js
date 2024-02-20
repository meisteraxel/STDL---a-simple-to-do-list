const taskInput = document.getElementById("task-input");
let mondayTasks = document.getElementById("monday-tasklist");
let tuesdayTasks = document.getElementById("tuesday-tasklist");
let wednesdayTasks = document.getElementById("wednesday-tasklist");
let thursdayTasks = document.getElementById("thursday-tasklist");
let fridayTasks = document.getElementById("friday-tasklist");
let saturdayTasks = document.getElementById("saturday-tasklist");
let sundayTasks = document.getElementById("sunday-tasklist");

function addTask() {
  const inputText = taskInput.value;
  const weekday = document.getElementById("weekdayDropdown").value;

  if (weekday === "Monday") {
    mondayTasks.innerHTML += `<li class="list-group-item">${inputText}</li>`;
  } else if (weekday === "Tuesday") {
    tuesdayTasks.innerHTML += `<li class="list-group-item">${inputText}</li>`;
  } else if (weekday === "Wednesday") {
    wednesdayTasks.innerHTML += `<li class="list-group-item">${inputText}</li>`;
  } else if (weekday === "Thursday") {
    thursdayTasks.innerHTML += `<li class="list-group-item">${inputText}</li>`;
  } else if (weekday === "Friday") {
    fridayTasks.innerHTML += `<li class="list-group-item">${inputText}</li>`;
  } else if (weekday === "Saturday") {
    saturdayTasks.innerHTML += `<li class="list-group-item">${inputText}</li>`;
  } else if (weekday === "Sunday") {
    sundayTasks.innerHTML += `<li class="list-group-item">${inputText}</li>`;
  }
}
