export default class AnimateBtn extends HTMLElement{

    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        this.styleElem = document.createElement("style");
        this.styleElem.textContent = `
        :host {
            --first-color: #00d;
            --ripple-color: #fff;
            --text-color: #000;
            --font-family: "Arial";
            --font-weight: 700;
        }
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .link{
            position: relative;
            display: inline-block;
            padding: .6rem 1.2rem;
            color: var(--ripple-color);
            text-decoration: none;
            font-size: .8rem;
            line-height: 1rem;
            overflow: hidden;
            background-color: var(--first-color);

            transition-property: padding, background-color, color;
            transition-duration: .2s;
        }
        .link:hover{
            padding: .6rem 1.8rem;
            color: var(--text-color);

            animation: btnColor .2s linear;
            animation-fill-mode: forwards;
        }
        .text-contain{
            position: relative;
            display: block;
            overflow: hidden;
            z-index: 1;
            font-family: var(--font-family);
            font-weight: var(--font-weight);
        }
        .text-animation{
            color: var(--text-color);
            animation: txtTranslate .2s linear;
            animation-fill-mode: forwards;
        }

        .ripple{
            position: absolute;
            background: var(--ripple-color);
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            border-radius: 50%;
            animation: ripple .2s linear;
            animation-fill-mode: forwards;
            z-index: 0;
        }
        @keyframes ripple{
            0%{
                width: 0px;
                height: 0px;
            }
            100%{
                width: 150px;
                height: 150px;
            }
        }
        @keyframes btnColor {
            99%{
                background-color: var(--first-color);
            }
            100%{
                background-color: var(--ripple-color);
            }
        }
        @keyframes txtTranslate {
            0%{
                transform: translateY(100%);
            }
            100%{
                transform: translateY(0);
            }
        }`;

        this.shadow.appendChild(this.styleElem);

        this.link = document.createElement("a");
        this.link.classList.add("link");
        this.link.href = this.getAttribute("href");
            this.textContain = document.createElement('div');
            this.textContain.classList.add('text-contain');
                this.text = document.createElement('p');
                this.text.innerHTML = "<slot></slot>";
                this.textContain.appendChild(this.text);
            this.link.appendChild(this.textContain);
        this.shadow.appendChild(this.link);

        this.link.addEventListener('mouseenter', function(){

            let ripples = document.createElement("span");
            ripples.classList.add("ripple");
            this.appendChild(ripples);

            let text = this.querySelector('p');
            text.classList.add("text-animation");

            setTimeout(() => {
                ripples.remove();
            }, 200);
        });

        this.link.addEventListener('mouseleave', function(){
            let text = this.querySelector('p');
            text.classList.remove("text-animation");
        });
    }
}
