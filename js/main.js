let myImage = document.getElementById("slideshow");
let images = ["images/slider1.avif", "images/slider2.avif", "images/slider3.avif", "images/slider4.avif" , "images/slider5.gif" , "images/slider6.gif" , "images/slider7.avif" , "images/slider8.gif"];
let i = 0;

function slideshow() {
    myImage.setAttribute('src', images[i]); // images[2]

    if(i == images.length - 1) {
        i = 0;
    } else {
        i++; // i = 2
    }

    setTimeout(function() {
        slideshow();
    }, 2000)
}

slideshow();