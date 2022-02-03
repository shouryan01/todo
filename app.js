function newItem() {
    var input = document.getElementById('input');
	var item = input.value;
	var ul = document.getElementById("list");
	var li = document.createElement('li');
  li.appendChild(document.createTextNode("- "+item));
  ul.appendChild(li);
  input.value="";
  li.onclick = removeItem;
}

document.body.onkeyup = function(e){
      if(e.keyCode == 13){
        newItem();
      }
  }

function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}

function toggleDarkMode() {
  var head = document.getElementById("input")
  var body = document.getElementById("body")
  input.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
}

function toggleLightMode() {
  var head = document.getElementById("input")
  var body = document.getElementById("body")
  input.classList.toggle("light-mode");
  body.classList.toggle("light-mode");
}
