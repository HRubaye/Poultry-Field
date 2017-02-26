// Two methods for timers - setTimeout and SetInterval (single / repeating)

/* function simpleMessage() {
	alert("This is just an alert box");
}
 */
 var imageArray2=["images/j1.JPG","images/j2.JPG","images/j3.jpg",
                 "images/j4.JPG","images/j5.JPG","images/j6.jpg","images/j7.jpg"];
var index = 0;
var ourImage = document.getElementById("mainImage");

function showImage(){
	ourImage.setAttribute("src",imageArray2[index]);
	index++;
	if(index >= imageArray2.length)
	{
		index=0;
	}
}
// setInterval(showImage,2000);
function showText()
{
	var text= document.createElement("h2");
	text.innerHTML="Hello";
	document.getElementById("mainContent").appendChild(text);
}

var intervalHandeler=setInterval(showImage,3000); 
ourImage.onclick= function ()
{
	clearInterval(intervalHandeler);
}
ourImage.ondblclick= function ()
{
	setInterval(showImage,5000);
}
	