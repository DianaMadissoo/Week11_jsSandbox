const currentMainImage = document.querySelector(".gallery-image4 img");
const imagesToChoosFrom = document.querySelectorAll(".gallery img");

imagesToChoosFrom.forEach(img => img.addEventListener('click', imageClick));

function imageClick(e) {
    imagesToChoosFrom.forEach(img => img.style.opacity = 1);
    currentMainImage.src = e.target.src;
    e.target.style.opacity = 0.5;
}