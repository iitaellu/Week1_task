/*console.log("Hello World!")*/

const helloButton = document.getElementById("my-button");
const addButton = document.getElementById("add-data");

helloButton.addEventListener("click", function () {
  console.log("Hello World");
  var x = document.getElementById("head");
  x.innerHTML = "My notebook";
});

addButton.addEventListener("click", function () {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  var newData = document.getElementById("data").value; //From:https://www.w3schools.com/howto/howto_js_todolist.asp

  if (newData !== "") {
    var text = document.createTextNode(newData);
    li.appendChild(text);
    ul.appendChild(li);
  }
});
/*newData.innerText = document.getElementById("data");*/
