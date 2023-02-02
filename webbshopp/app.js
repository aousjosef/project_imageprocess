var images = [
  "media/erb1.jpg",
  "media/erb2.jpg",
  "media/erb3.jpg",
  "media/erb4.jpg",
];

var i = 0;

function slideShow() {
  document.getElementById("image-banner").src = images[i];

  if (i < images.length - 1) {
    // console.log( i + "less than 3");
    i++;
  } else {
    // console.log( i + "THIS IS LAST ONE");
    i = 0;
  }

  console.log("THIS IS WHAT THE FUNCTION RECEIVE " + i);

  setTimeout("slideShow()", 2500);
}

window.onload = slideShow();
