


function caller(){
console.log(localStorage);
for(var i=0, j=localStorage.length; i<j; i++) {
	var container = document.getElementById("previousposts");
	var key = localStorage.key(i);
	var retrievedObject = localStorage.getItem(key);
	container.innerHTML = (container.innerHTML + ("<article id='" + JSON.parse(retrievedObject).id + "'>" + "<h3>" + JSON.parse(retrievedObject).title + "</h3>" + "<br>" + "Type: " + JSON.parse(retrievedObject).type + "<br>" + "Category: " + JSON.parse(retrievedObject).category + "<br>" + "Date: " + JSON.parse(retrievedObject).date + "<br>" + "Content: " +  "<p>" + JSON.parse(retrievedObject).content + "</p>"  + "<br>" + "Favorite: " + JSON.parse(retrievedObject).favorite + "<div id='editor'><input id='edit' type='button' class='button' value='Edit' onclick='editme(" + JSON.parse(retrievedObject).id + ")'><input id='delete' type='submit' class='button' value='Delete' onclick='localStorage.removeItem(" + JSON.parse(retrievedObject).id + ")'></div></article>"));
}
}

var deletebutton = document.getElementById("clear");
var editbutton = document.getElementById("edit");
var postdelete = document.getElementById("delete");


function clearall(){
	localStorage.clear();
	window.location = ("index.html");
}

function editme(id){
var editor = document.getElementById('editorconsole');
editor.innerHTML = ("<iframe src='editor.html' width='100%' onload='editorsetup(" + id + ")'></iframe>")
	
}

deletebutton.addEventListener("click", clearall);

/*
console.log(localStorage);
function $(x) {
		var elementID = document.getElementById(x);
		return elementID;
	};

var makeDiv = document.createElement('div');
makeDiv.setAttribute("id", "items");
var makeList = document.createElement('ul');
makeDiv.appendChild(makeList);
document.body.appendChild(makeDiv);
// Set 'items' display //
$('items').style.display = "block";
	for(var i=0, j=localStorage.length; i<j; i++) {
			var makeLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// Convert string from local storage into value by JSON.parse //
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			for (var x in obj) {
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubTxt = obj[x][0]+" "+obj[x][1];
				makeSubLi.innerHTML = optSubTxt;
			}
		}
*/
