
import AnimateBtn from './src/scripts/animateBtn.js';
import nav from './src/scripts/nav.js'

// Animated button
customElements.define('animate-btn', AnimateBtn);

// Nav
nav();

// Parallax
const MathUtils = {
    map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c
};

let winsize;
const calcWinsize = () => {
    winsize = {width: window.innerWidth, height: window.innerHeight};
}
calcWinsize();
window.addEventListener('resize', calcWinsize);

let docScroll;
const getPageYScroll = () => {
    docScroll = window.pageYOffset || document.documentElement.scrollTop;
}
window.addEventListener('scroll', getPageYScroll);

export default class ParallaxImg{
    constructor(el){
        this.DOM = {el: el};
        this.DOM.image = this.DOM.el.querySelector('.parallax-img_bg');
        this.renderedStyles = {
            innerTranslationY: {
                current: 0,
                maxValue: (parseInt(getComputedStyle(this.DOM.image).height, 10) - parseInt(getComputedStyle(this.DOM.el).height, 10)) / 2,
                setValue: () => {
                    const maxValue = this.renderedStyles.innerTranslationY.maxValue;
                    const minValue = -1 * maxValue;
                    return Math.max(Math.min(MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, minValue, maxValue), maxValue), minValue)
                }
            }
        };
        this.update();
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => this.isVisible = entry.intersectionRatio > 0);
        });
        this.observer.observe(this.DOM.el);
        this.initEvents();
    }
    update() {
        this.getSize();
        for (const key in this.renderedStyles) {
            this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        }
        this.layout();
    }
    getSize() {
        const rect = this.DOM.el.getBoundingClientRect();
        this.props = {
            height: rect.height,
            top: docScroll + rect.top
        }
    }
    initEvents(){
        window.addEventListener('resize', () => this.resize());
    }
    resize(){
        this.update();
    }
    render(){
        for (const key in this.renderedStyles ) {
            this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        }
        this.layout();
    }
    layout(){
        this.DOM.image.style.transform = `translate3d(0,${this.renderedStyles.innerTranslationY.current}px,0)`;
    }
}


getPageYScroll();

let items = [];
[...document.querySelectorAll('.parallax-img')].forEach(item => {
    items.push(new ParallaxImg(item));
});

requestAnimationFrame(() => {
    render();
});

function render(){
    for(const item of items){
        if(item.isVisible){
            item.render();
        }
    }
    requestAnimationFrame(() => render());
}
