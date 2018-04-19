// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs

var myPlayList = [
	{
		"title":"24K",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Medicine",
		"artist":"Queen Naija",
		"mp3-url":"https://www.youtube.com/watch?v=dc89yyOS0Z8",
		"image-url":"https://i.ytimg.com/vi/BhKksAjzJis/maxresdefault.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	},
	{
		"title" :"One,Two Step",
		"artist":"Ciara" ,
		"mp3-url":"https://youtu.be/4p4a6_06AEI",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Ciara_1%2C_2_step.jpg/220px-Ciara_1%2C_2_step.jpg",
		
	},
	{
"title":"Hollaback Girl",
"artist": "Gwen Stefani",
"mp3-url":"https://youtu.be/EAmChFTLP4w",
"image-url":"https://www.ihollaback.org/app/uploads/2012/07/logo-holla-kerned.jpg",

},
{
"title":"Nice For What",
"artist": "Drake",
"mp3-url":"https://www.youtube.com/watch?v=U9BwWKXjVaI",
"image-url":"https://i.ytimg.com/vi/KRaPykuwCiw/maxresdefault.jpg",
}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {

for(var i =0; i< myPlayList.length; i++){
    var songObject = myPlayList[i];
    var title = songObject.title;
    var artist = songObject.artist;
    var image = songObject["image-url"];
     $(".myPlayList").append("<h3>" + title + "</h3>"); 
     $(".myPlayList").append("<h3>" + artist + "</h3>");
     $(".myPlayList").append("<img src = " + image + ">");
     $(".myPlayList").append("<br>");
    console.log(title);
}


});

function displayList(){

for (var i = 0; i < myPlayListItems.length; i++) { 
    $('.songs').append(myPlayListItems[i].text);
}

  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
