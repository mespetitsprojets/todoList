var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
  if(inputField.value != ""){
    var paragraph = document.createElement('div');
    var taskContainer = document.createElement('div');
   
  paragraph.innerHTML = inputField.value;

  toDoContainer.appendChild(taskContainer);

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
    toDoContainer.removeChild(taskContainer);
  };

  // on imbrique les elements enfants dans le taskContainter
  taskContainer.appendChild(toggleButton);
  taskContainer.appendChild(paragraph);
  taskContainer.appendChild(editButton);
  taskContainer.appendChild(deleteButton);

  // on vide la case inputField  
  inputField.value="";

  // on applique les style css
  taskContainer.classList.add('task_container');
  toggleButton.classList.add('toggleButton','pointer');
  paragraph.classList.add('paragraph_style');
  editButton.classList.add('editButton','pointer');
  deleteButton.classList.add('deleteButton','pointer');
  }
}

//fonction clearAll

clearAll.onclick = function(){
  while(toDoContainer.firstChild){
    toDoContainer.removeChild(toDoContainer.firstChild);
  }
}

//fonction editTask
function editTask(paragraph){
  var paragraphTextElement = paragraph.firstChild;
  var paragraphText = paragraphTextElement.textContent;

  var newparagraphText = prompt("Oops, je rectifie:", paragraphText);

  if( newparagraphText != ""){
    paragraphTextElement.textContent = newparagraphText;
  }
}

inputField.addEventListener("keypress", function(event) // Execute a function when the user presses a key on the keyboard
{
  if (event.keyCode == 13) { // If the user presses the "Enter" key on the keyboard
    event.preventDefault(); // Cancel the default action, if needed
    document.getElementById("addToDo2").click(); // Trigger the button element with a click
  }
});