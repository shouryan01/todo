window.onload = loadTasks;

var intervalId = window.setInterval(function(){
    var input = document.getElementById('input');
    input.focus()
}, 500);

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    var ul = document.getElementById("list");
    tasks.forEach(task => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("- "+task));
        ul.appendChild(li);
        li.onclick = removeItem;
    });

    var theme = localStorage.getItem("theme");
    if (theme === "dark") {
        restoreTheme();
    }
  
}

function newItem() {
    var input = document.getElementById('input');
    var item = input.value;
    if (item === "" || item === " ") {
        return;
    }
    var ul = document.getElementById("list");

    
    var li = document.createElement('li')
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(item);
    localStorage.setItem("tasks", JSON.stringify(tasks));


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
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(element => {
        if (element === e.target.innerHTML.slice(2)) {
            tasks.splice(tasks.indexOf(element), 1);
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    e.target.parentElement.removeChild(e.target);
}

function toggleTheme() {
    var theme = localStorage.getItem("theme");
    if (theme === "dark") {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
    var head = document.getElementById("input")
    var body = document.getElementById("body")
    input.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
}

function restoreTheme() {
    var head = document.getElementById("input")
    var body = document.getElementById("body")
    input.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
}