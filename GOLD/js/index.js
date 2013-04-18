
function caller(){
console.log(localStorage);
for(var i=0, j=localStorage.length; i<j; i++) {
	var container = document.getElementById("previousposts");
	var key = localStorage.key(i);
	var retrievedObject = localStorage.getItem(key);
	container.innerHTML = (container.innerHTML + ("<article id='" + JSON.parse(retrievedObject).id + "'><div class='favorite'><img src='images/"+ JSON.parse(retrievedObject).type + ".png' class='icon'><img src='images/"+ JSON.parse(retrievedObject).favorite +".png' class='icon'></div>"  + "<h3>" + JSON.parse(retrievedObject).title + "</h3>" + "<br>" + "Type: " + JSON.parse(retrievedObject).type + "<br>" + "Category: " + JSON.parse(retrievedObject).category + "<br>" + "Date: " + JSON.parse(retrievedObject).date + "<br>" +  "<p>" + JSON.parse(retrievedObject).content + "</p>"  + "<br>" + "<div id='editor'><input id='edit' data-inline='true' type='button' class='button' value='Edit' onclick='editorsetup(" + JSON.parse(retrievedObject).id + ")'><input id='delete' data-inline='true' type='submit' class='button' value='Delete' onclick='deleteme(" + JSON.parse(retrievedObject).id + ")'></div></article>"));
}
}

function filtercat(cat){
for(var i=0, j=localStorage.length; i<j; i++) {
	var container = document.getElementById("previousposts");
	var key = localStorage.key(i);
	var retrievedObject = localStorage.getItem(key);
	if (retrievedObject.category === cat){
	container.innerHTML = (container.innerHTML + ("<article id='" + JSON.parse(retrievedObject).id + "'><div class='favorite'><img src='images/"+ JSON.parse(retrievedObject).type + ".png' class='icon'><img src='images/"+ JSON.parse(retrievedObject).favorite +".png' class='icon'></div>"  + "<h3 id='title'>" + JSON.parse(retrievedObject).title + "</h3>" + "<br>" + "Type: " + JSON.parse(retrievedObject).type + "<br>" + "Category: " + JSON.parse(retrievedObject).category + "<br>" + "Date: " + JSON.parse(retrievedObject).date + "<br>" +  "<p>" + JSON.parse(retrievedObject).content + "</p>"  + "<br>" + "<div id='editor'><input id='edit' data-inline='true' type='button' class='button' value='Edit' onclick='editme(" + JSON.parse(retrievedObject).id + ")'><input id='delete' data-inline='true' type='submit' class='button' value='Delete' onclick='deleteme(" + JSON.parse(retrievedObject).id + ")'></div></article>"));
	}
}
window.location = ("app.html");
}

function deleteme(id){
	localStorage.removeItem(id);
	window.location = ("app.html");
}


var editbutton = document.getElementById("edit");
var postdelete = document.getElementById("delete");



function editme(id){
var editor = document.getElementById('editorconsole');
editor.innerHTML = ("<iframe src='editor.html' width='100%' onload='editorsetup(" + id + ")'></iframe>")
	
}
var Testobj = localStorage;
console.log(JSON.stringify(Testobj));


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
