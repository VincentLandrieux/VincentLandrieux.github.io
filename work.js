(()=>{var s=class extends HTMLElement{constructor(){super();this.shadow=this.attachShadow({mode:"open"}),this.styleElem=document.createElement("style"),this.styleElem.textContent=`
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
        }`,this.shadow.appendChild(this.styleElem),this.link=document.createElement("a"),this.link.classList.add("link"),this.link.href=this.getAttribute("href"),this.textContain=document.createElement("div"),this.textContain.classList.add("text-contain"),this.text=document.createElement("p"),this.text.innerHTML="<slot></slot>",this.textContain.appendChild(this.text),this.link.appendChild(this.textContain),this.shadow.appendChild(this.link),this.link.addEventListener("mouseenter",function(){let e=document.createElement("span");e.classList.add("ripple"),this.appendChild(e),this.querySelector("p").classList.add("text-animation"),setTimeout(()=>{e.remove()},200)}),this.link.addEventListener("mouseleave",function(){this.querySelector("p").classList.remove("text-animation")})}};var c=()=>{let t=document.querySelector(".nav-bar_menu"),e=document.querySelector(".nav-menu"),i=document.querySelectorAll(".nav-menu_link"),n=document.querySelectorAll(".nav-bar_link");t.addEventListener("click",()=>{t.classList.toggle("opened"),e.classList.toggle("opened")}),i.forEach(r=>{r.addEventListener("click",o=>{i.forEach(a=>{a.classList.remove("select")}),o.target.classList.add("select"),t.classList.toggle("opened"),e.classList.toggle("opened")})}),n.forEach(r=>{r.addEventListener("click",o=>{n.forEach(a=>{a.classList.remove("select")}),o.target.classList.add("select")})})};customElements.define("animate-btn",s);c();var g={map:(t,e,i,n,r)=>(t-e)*(r-n)/(i-e)+n},h,m=()=>{h={width:window.innerWidth,height:window.innerHeight}};m();window.addEventListener("resize",m);var l,p=()=>{l=window.pageYOffset||document.documentElement.scrollTop};window.addEventListener("scroll",p);var d=class{constructor(e){this.DOM={el:e},this.DOM.image=this.DOM.el.querySelector(".parallax-img_bg"),this.renderedStyles={innerTranslationY:{current:0,maxValue:(parseInt(getComputedStyle(this.DOM.image).height,10)-parseInt(getComputedStyle(this.DOM.el).height,10))/2,setValue:()=>{let i=this.renderedStyles.innerTranslationY.maxValue,n=-1*i;return Math.max(Math.min(g.map(this.props.top-l,h.height,-1*this.props.height,n,i),i),n)}}},this.update(),this.observer=new IntersectionObserver(i=>{i.forEach(n=>this.isVisible=n.intersectionRatio>0)}),this.observer.observe(this.DOM.el),this.initEvents()}update(){this.getSize();for(let e in this.renderedStyles)this.renderedStyles[e].current=this.renderedStyles[e].setValue();this.layout()}getSize(){let e=this.DOM.el.getBoundingClientRect();this.props={height:e.height,top:l+e.top}}initEvents(){window.addEventListener("resize",()=>this.resize())}resize(){this.update()}render(){for(let e in this.renderedStyles)this.renderedStyles[e].current=this.renderedStyles[e].setValue();this.layout()}layout(){this.DOM.image.style.transform=`translate3d(0,${this.renderedStyles.innerTranslationY.current}px,0)`}};p();var u=[];[...document.querySelectorAll(".parallax-img")].forEach(t=>{u.push(new d(t))});requestAnimationFrame(()=>{f()});function f(){for(let t of u)t.isVisible&&t.render();requestAnimationFrame(()=>f())}})();
//# sourceMappingURL=work.js.map
