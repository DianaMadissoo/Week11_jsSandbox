const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["images/p1.jpg", "images/p2.jpg", "images/p3.jpg", "images/p4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];
}