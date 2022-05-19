//---VARIABLE---//
const TIME = 600;
const DELAY = 20;

const KEYFRAMES = [
    {
        transform: 'translateY(80%)',
        opacity: 0
    },
    {
        opacity: .20
    },
    {
        transform: 'translateY(0px)',
        opacity: 1
    }
];
const animationOptions = {
    direction: 'alternate',
    duration: TIME,
    delay: DELAY,
    easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
    fill: 'forwards'
};


//---MAIN---//
export default () => {
    const lettersEl = [];

    const containers = document.querySelectorAll("[data-splitting]");

    for(const _item of containers){
        _item.classList.add("split-container");

        const words = _item.innerText.split(' ');

        _item.innerText = "";
        
        for(const _key in words){
            const word = words[_key];

            const wordEl = createSpanWord();

            const letters = word.split('');

            for(const _letter of letters){
                const letterEl = createSpanLetter(_letter);
                wordEl.appendChild(letterEl);

                lettersEl.push(letterEl);
            }

            if(_key != (words.length - 1)){
                wordEl.appendChild(createSpanWhitespace());
            }

            _item.appendChild(wordEl);
        }
    }

    for (const _key in lettersEl) {
        const options = { ...animationOptions };
        options.delay = DELAY * _key;

        lettersEl[_key].animate(KEYFRAMES, options);
    }
}


//---FUNCTION---//
function createSpanLetter(_content){
    const span = document.createElement("span");
    span.classList.add("split_letter");
    span.innerText = _content;

    return span;
}
function createSpanWhitespace(){
    const span = document.createElement("span");
    span.classList.add("split_whitespace");
    span.innerHTML = "&nbsp;";

    return span;
}
function createSpanWord(){
    const span = document.createElement("span");
    span.classList.add("split_word");

    return span;
}