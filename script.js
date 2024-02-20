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

  // Überprüfen ob Task eingegeben wurde
  if (inputText === "") {
    return;
  }

  // Ein neues <li>-Element erstellen
  const newTask = document.createElement("li");
  newTask.className = "list-group-item";
  newTask.textContent = inputText;

  // Event-Listener hinzufügen, um das <li>-Element zu entfernen, wenn darauf geklickt wird
  newTask.addEventListener("click", function () {
    this.parentNode.removeChild(this);
  });

  // Das <li>-Element zur entsprechenden Liste hinzufügen
  switch (weekday) {
    case "Monday":
      mondayTasks.appendChild(newTask);
      break;
    case "Tuesday":
      tuesdayTasks.appendChild(newTask);
      break;
    case "Wednesday":
      wednesdayTasks.appendChild(newTask);
      break;
    case "Thursday":
      thursdayTasks.appendChild(newTask);
      break;
    case "Friday":
      fridayTasks.appendChild(newTask);
      break;
    case "Saturday":
      saturdayTasks.appendChild(newTask);
      break;
    case "Sunday":
      sundayTasks.appendChild(newTask);
      break;
  }

  // Eingabefeld leeren
  taskInput.value = "";
}
