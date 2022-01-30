function newItem() {
    var input = document.getElementById('input');
    input.focus();
    input.select();
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
