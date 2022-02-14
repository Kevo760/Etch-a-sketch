

// Creates the div boxes
function createContainer(size) {
let container = document.querySelector('.container');
let squares = container.querySelectorAll('div');
// when size changes it removes previous div
squares.forEach(div=> div.remove());
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount = size * size;
for(let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.background = 'white';
    container.insertAdjacentElement("beforeend", square);
};

};

// Runs Conatiner at 16 when pages runs
createContainer(16);

// Size changes based on the input amount
function changeSize(input) {
    createContainer(input);
};


// Slider
const slider = document.getElementById('slider');
const sliderText = document.querySelector('.slider-text');
const sliderText2 = document.querySelector('.slider-text-2');
sliderText.innerHTML = slider.value;
sliderText2.innerHTML = slider.value;

// Display slider value
slider.oninput = function() {
    sliderText.innerHTML = this.value;
    sliderText2.innerHTML = this.value;
};


// Button selections for colors, rainbow, and erase

function colorSquare(){
    let trueColor = document.querySelector('input[name="select"]:checked').value;
    this.style.backgroundColor = trueColor;
    if(trueColor === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        trueColor = document.querySelector('input[name="select"]:checked').value;
    }
};


//clears the container
const clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach(div=> div.style.backgroundColor = "white");
});