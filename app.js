// var addToDoButton = document.getElementById('addToDo');
// var toDoContainer = document.getElementById('toDoContainer');
// var inputField = document.getElementById('inputField');

var addToDoButton2 = document.getElementById('addToDo2');
var toDoContainer2 = document.getElementById('toDoContainer2');
var inputField2 = document.getElementById('inputField2');

// toDo List 1
// addToDoButton.onclick = function(){
//   if(inputField.value != ""){
//     var paragraph = document.createElement('div');
//   }
//   paragraph.innerText = inputField.value;
//   toDoContainer.appendChild(paragraph);

//   paragraph.classList.add('paragraph_style');
  
//   inputField.value="";

//     paragraph.onclick = function(){
//     paragraph.classList.toggle('paragraph_click');
//   }

//   paragraph.ondblclick = function(){
//     toDoContainer.removeChild(paragraph);
//   }
// }

// clearAll.onclick = function(){
//   while(toDoContainer.firstChild){
//     toDoContainer.removeChild(toDoContainer.firstChild);
//   }
// }

// inputField.addEventListener("keypress", function(event) // Execute a function when the user presses a key on the keyboard
// {
//   if (event.keyCode == 13) { // If the user presses the "Enter" key on the keyboard
//     event.preventDefault(); // Cancel the default action, if needed
//     document.getElementById("addToDo").click(); // Trigger the button element with a click
//   }
// });

// body.addEventListener("keypress", function(event) // Execute a function when the user presses a key on the keyboard
// {
//   if (event.keyCode == 18) { // If the user presses the "Enter" key on the keyboard // Cancel the default action, if needed
//     document.getElementById("clearAll").click(); // Trigger the button element with a click
//   }
// });

// toDo List 2
addToDoButton2.onclick = function(){
  if(inputField2.value != ""){
    var paragraph = document.createElement('div');
    var taskContainer = document.createElement('div');
  }
  
  paragraph.innerHTML = inputField2.value;

  toDoContainer2.appendChild(taskContainer);

  var toggleButton = document.createElement("button");
  toggleButton.onclick = function() {
    paragraph.classList.toggle('paragraph_click');
    toggleButton.classList.toggle('toggleButton_click');
  };

  var editButton = document.createElement("button");
  editButton.innerHTML='<ion-icon name="create-outline"></ion-icon>'
  editButton.onclick = function(){
    editTask(paragraph);
  };

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<ion-icon style ="color:midnightblue" name="close-outline"></ion-icon>'
  deleteButton.onclick = function(){
    toDoContainer2.removeChild(taskContainer);
  };

  taskContainer.appendChild(toggleButton);
  taskContainer.appendChild(paragraph);
  taskContainer.appendChild(editButton);
  taskContainer.appendChild(deleteButton);

  inputField2.value="";

  taskContainer.classList.add('task_container');
  toggleButton.classList.add('toggleButton');
  toggleButton.classList.add('pointer');
  paragraph.classList.add('paragraph_style');
  editButton.classList.add('editButton');
  editButton.classList.add('pointer');
  deleteButton.classList.add('deleteButton');
  deleteButton.classList.add('pointer');
}

clearAll2.onclick = function(){
  while(toDoContainer2.firstChild){
    toDoContainer2.removeChild(toDoContainer2.firstChild);
  }
}

function editTask(paragraph){
  var paragraphTextElement = paragraph.firstChild;
  var paragraphText = paragraphTextElement.textContent;

  var newparagraphText = prompt("Oops, je rectifie:", paragraphText);

  if( newparagraphText != ""){
    paragraphTextElement.textContent = newparagraphText;
  }
}

inputField2.addEventListener("keypress", function(event) // Execute a function when the user presses a key on the keyboard
{
  if (event.keyCode == 13) { // If the user presses the "Enter" key on the keyboard
    event.preventDefault(); // Cancel the default action, if needed
    document.getElementById("addToDo2").click(); // Trigger the button element with a click
  }
});