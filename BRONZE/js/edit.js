

function editorsetup(id){
	var key = localStorage.key(id);
	var retrievedObject = localStorage.getItem(key);
	var obj = JSON.parse(retrievedObject);
	
	document.getElementById("title").value = obj.title;
	document.getElementById("type").value = obj.type;
	document.getElementById("category").value = obj.category;
	
	window.location("app.html#page7");
}

var newpost = {};
	newpost.title = document.getElementById("title").value;
	newpost.type = "";
	newpost.category = "";
	newpost.date = "";
	newpost.signi = "";
	newpost.content = "";
	newpost.favorite = false;
	newpost.id = "";

	
	console.log(newpost.id);
var subbutton = document.getElementById("submit");
var prebutton = document.getElementById("pre");

var posts = [];

var newconsole = function(){
	newpost.title = document.getElementById("title").value;
	newpost.type = document.getElementById("type").value;
	newpost.category = document.getElementById("category").value;
	newpost.date = document.getElementById("date").value;
	newpost.signi = document.getElementById("sig").value;
	newpost.content = document.getElementById("content").value;
	newpost.favorite = document.getElementById("fav").value;
	var article = document.getElementById("suboutput");
	var addart = document.createElement("article");
	article.appendChild(addart);
	addart.innerHTML = ("<h3>" + newpost.title + "</h3>" + "<br>" + "Type: " + newpost.type + "<br>" + "Category: " + newpost.category + "<br>" + "Date: " + newpost.date + "<br>" + "Content: " + newpost.content + "<br>" + "Favorite: " + newpost.favorite);
	console.log(newpost);
	localStorage.setItem(newpost.id , JSON.stringify(newpost));
	window.location = ("index.html");
}





console.log(posts);
subbutton.addEventListener("click", newconsole);