var todoInputElem = document.getElementById('todo');
var todoListElem = document.getElementById('todoList');

function addToDo() {
  var todoVal = todoInputElem.value;

  if (!todoVal.length) {
    alert('Please enter todo');
    return;
  }

  // 1. create a HTML node
  var liElem = document.createElement('li');

  // 2.create a Text node
  var textNode = document.createTextNode(todoVal);

  /** parentElem.appendChild(childElem) */
  // 3. append Text node to HTML
  liElem.appendChild(textNode);

  // 4. HTML node to targetElement
  todoListElem.appendChild(liElem);

  todoInputElem.value = '';
}
