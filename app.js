const container = document.getElementById("container");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 400;
const LIGHT_UP_DURATION = 100;
const FADE_OUT_DELAY = 500;

for(let i = 0; i < SQUARES; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => remeveColor(square));

    container.appendChild(square);
}

function setColor(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

    setTimeout(() => {
        element.style.background = color;
        element.style.boxShadow = '0 0 2px #000';
    }, LIGHT_UP_DURATION);
}

function remeveColor(element){
    setTimeout(() => {
        element.style.background = '#1d1d1d';
        element.style.boxShadow = '0 0 2px #090';
    }, FADE_OUT_DELAY);
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}