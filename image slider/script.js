let slide = document.querySelectorAll(".slide");
let counter = 0;

slide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Next button
const gonext = () => {
    if (counter < slide.length - 1) 
        counter++// Moves to next slide, loops back to first image if at the last
    slideimage();
};

// Previous button
const goprev = () => {
    counter = (counter - 1) // Moves to prev slide, loops back to last image if at the first
    slideimage();
};

const slideimage = () => {
    slide.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
