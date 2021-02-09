import AnimateBtn from './animateBtn.js';

customElements.define('animate-btn', AnimateBtn);

////
// Text Reveal
////
let letters = [];
const time = 1000;
const delay = 25;

let splitElem = document.querySelectorAll("[splitting]");

splitElem.forEach((item) => {
    let tab = item.innerText.split('');
    item.innerHTML = "";
    tab.forEach((letter) => {
        let span = document.createElement("span");
        span.classList.add("splitting_letter");
        span.innerHTML = (letter != " ")? letter: "&nbsp;";
        item.appendChild(span);

        letters.push(span);
    });
});

letters.forEach((item, i) => {
    item.animate([
        // keyframes
        {
            transform: 'translateY(100%)',
            opacity: 0
        },
        {
            opacity: .25
        },
        {
            transform: 'translateY(0px)',
            opacity: 1
        }
    ], {
        // timing options
        direction: 'alternate',
        // iterations: 'Infinity',
        duration: time,
        delay: delay * i,
        easing: 'ease',
        fill: 'forwards'
    });
});
