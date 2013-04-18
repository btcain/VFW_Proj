/*
Benjamin Cain
VFW Project 2
Full Sail University


NOTE:
I did not include the "for" loop that is supposed to loop through the keys and posts on this assignment. I had a seperate test document that I was using to try and display the local storage correctly, but nothing was working. If id DID manage to loop through the local storage, it parsed the "key" numbers as single letters in the object instead of looking for the object ids. Either that, or i would get an unexpected encounter of "S" which I didn't really understand.

Currently, all posts will overwrite your previous post.
*/

function idgen(){
	var newid = 0;
		
	}

var newpost = {};
	newpost.title = document.getElementById("title").value;
	newpost.type = "";
	newpost.category = "";
	newpost.date = "";
	newpost.signi = "";
	newpost.content = "";
	newpost.favorite = false;
	newpost.id = (localStorage.length + 1);

	
	console.log(newpost.id);
var subbutton = document.getElementById("submit");
var prebutton = document.getElementById("pre");

var posts = [];

var displayconsole = function(){
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

var preview = function(){
	newpost.title = document.getElementById("title").value;
	newpost.type = document.getElementById("type").value;
	newpost.category = document.getElementById("category").value;
	newpost.date = document.getElementById("date").value;
	newpost.signi = document.getElementById("sig").value;
	newpost.content = document.getElementById("content").value;
	newpost.favorite = document.getElementById("fav").value;
	var article = document.getElementById("previewpost");
	article.innerHTML = ("<h3>" + newpost.title + "</h3>" + "<br>" + "Type: " + newpost.type + "<br>" + "Category: " + newpost.category + "<br>" + "Date: " + newpost.date + "<br>" + "Content: " + newpost.content + "<br>" + "Favorite: " + newpost.favorite);
	console.log(newpost);
}

function editpost(id){
	var key = localStorage.key(id);
	var retrievedObject = localStorage.getItem(key);
	var obj = JSON.parse(retrievedObject);
	newpost.id = obj.id
	document.getElementById("title").value = obj.title;
}



console.log(posts);
prebutton.addEventListener("click", preview);
subbutton.addEventListener("click", displayconsole);
