var deletebutton = document.getElementById("clear");
function clearall(){
	localStorage.clear();
	window.location = ("app.html");
}


deletebutton.addEventListener("click", clearall);


function editorsetup(id){
	var key = localStorage.key(id);
	var retrievedObject = localStorage.getItem(key);
	var obj = JSON.parse(retrievedObject);
	window.location = ("app.html#page7");
	document.getElementById("title").value = obj.title;
	document.getElementById("type").value = obj.type;
	document.getElementById("selectmenu2").value = obj.category;
	document.getElementById("date").value = obj.date;
	document.getElementById("slider1").value = obj.signi;
	document.getElementById("textarea1").value = obj.content;
	document.getElementById("fav").value = obj.favorite;
	localStorage.removeItem(id);

}
