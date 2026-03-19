// Background slideshow logic
const images = document.querySelectorAll('.bg-slideshow img');
const total = images.length;

const bg2Text = document.getElementById('bg2-text');
const bg3Text = document.getElementById('bg3-text');
const bg4Text = document.getElementById('bg4-text');
const mainContent = document.getElementById('main-content');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    let index = Math.floor(scrollPos / (document.body.scrollHeight / total));

    images.forEach((img, i) => {
        img.style.opacity = i === index ? 1 : 0;
    });

    mainContent.style.opacity = index === 0 ? 1 : 0;
    bg2Text.style.opacity = index === 1 ? 1 : 0;
    bg3Text.style.opacity = index === 2 ? 1 : 0;
    bg4Text.style.opacity = index === 3 ? 1 : 0;
});

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.left = Math.random() * 100 + "vw";

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);
