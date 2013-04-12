if (localStorage.length === 0){
	var pop = confirm("There's nothing here! Would you like to make some test posts?")
	if (pop == true){
		var firstpost = {};
	firstpost.title = "Hello World!";
	firstpost.type = "Idea";
	firstpost.category = "Entertainment";
	firstpost.date = "03-02-2013";
	firstpost.signi = "3";
	firstpost.content = "This is your very first post!";
	firstpost.favorite = false;
	firstpost.id = (localStorage.length + 1);
	localStorage.setItem(firstpost.id , JSON.stringify(firstpost));
	
	var secondpost = {};
	secondpost.title = "Hello, again!";
	secondpost.type = "Dream";
	secondpost.category = "Entertainment";
	secondpost.date = "03-02-2013";
	secondpost.signi = "3";
	secondpost.content = "This is your very second post!";
	secondpost.favorite = true;
	secondpost.id = (localStorage.length + 1);
	localStorage.setItem(secondpost.id , JSON.stringify(secondpost));
	
	}
}


function caller(){
console.log(localStorage);
for(var i=0, j=localStorage.length; i<j; i++) {
	var container = document.getElementById("previousposts");
	var key = localStorage.key(i);
	var retrievedObject = localStorage.getItem(key);
	container.innerHTML = (container.innerHTML + ("<article id='" + JSON.parse(retrievedObject).id + "'><div class='favorite'><img src='images/"+ JSON.parse(retrievedObject).type + ".png' class='icon'><img src='images/"+ JSON.parse(retrievedObject).favorite +".png' class='icon'></div>"  + "<h3>" + JSON.parse(retrievedObject).title + "</h3>" + "<br>" + "Type: " + JSON.parse(retrievedObject).type + "<br>" + "Category: " + JSON.parse(retrievedObject).category + "<br>" + "Date: " + JSON.parse(retrievedObject).date + "<br>" +  "<p>" + JSON.parse(retrievedObject).content + "</p>"  + "<br>" + "<div id='editor'><input id='edit' type='button' class='button' value='Edit' onclick='editme(" + JSON.parse(retrievedObject).id + ")'><input id='delete' type='submit' class='button' value='Delete' onclick='localStorage.removeItem(" + JSON.parse(retrievedObject).id + ")'></div></article>"));
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
var Testobj = localStorage;
console.log(JSON.stringify(Testobj));
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
