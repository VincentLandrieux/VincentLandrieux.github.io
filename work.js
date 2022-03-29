(()=>{var r=class extends HTMLElement{constructor(){super();this.shadow=this.attachShadow({mode:"open"}),this.styleElem=document.createElement("style"),this.styleElem.textContent=`
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
        }`,this.shadow.appendChild(this.styleElem),this.link=document.createElement("a"),this.link.classList.add("link"),this.link.href=this.getAttribute("href"),this.textContain=document.createElement("div"),this.textContain.classList.add("text-contain"),this.text=document.createElement("p"),this.text.innerHTML="<slot></slot>",this.textContain.appendChild(this.text),this.link.appendChild(this.textContain),this.shadow.appendChild(this.link),this.link.addEventListener("mouseenter",function(){let e=document.createElement("span");e.classList.add("ripple"),this.appendChild(e),this.querySelector("p").classList.add("text-animation"),setTimeout(()=>{e.remove()},200)}),this.link.addEventListener("mouseleave",function(){this.querySelector("p").classList.remove("text-animation")})}};var p=()=>{let t=document.querySelector(".nav-bar_menu"),e=document.querySelector(".nav-menu"),n=document.querySelectorAll(".nav-menu_link"),i=document.querySelectorAll(".nav-bar_link");t.addEventListener("click",()=>{t.classList.toggle("opened"),e.classList.toggle("opened")}),n.forEach(s=>{s.addEventListener("click",a=>{n.forEach(l=>{l.classList.remove("select")}),a.target.classList.add("select"),t.classList.toggle("opened"),e.classList.toggle("opened")})}),i.forEach(s=>{s.addEventListener("click",a=>{i.forEach(l=>{l.classList.remove("select")}),a.target.classList.add("select")})})},d=document.querySelector(".nav-bar"),u=0,o=0,c=!1;function w(t){let e=d.clientHeight;t>u&&!(t<=e)?d.classList.add("hidden"):d.classList.remove("hidden")}window.addEventListener("scroll",function(t){o=window.pageYOffset||document.documentElement.scrollTop,c||window.requestAnimationFrame(function(){w(o),u=o<=0?0:o,c=!1}),c=!0});customElements.define("animate-btn",r);p();var k={map:(t,e,n,i,s)=>(t-e)*(s-i)/(n-e)+i},f,g=()=>{f={width:window.innerWidth,height:window.innerHeight}};g();window.addEventListener("resize",g);var h,v=()=>{h=window.pageYOffset||document.documentElement.scrollTop};window.addEventListener("scroll",v);var m=class{constructor(e){this.DOM={el:e},this.DOM.image=this.DOM.el.querySelector(".parallax-img_bg"),this.renderedStyles={innerTranslationY:{current:0,maxValue:(parseInt(getComputedStyle(this.DOM.image).height,10)-parseInt(getComputedStyle(this.DOM.el).height,10))/2,setValue:()=>{let n=this.renderedStyles.innerTranslationY.maxValue,i=-1*n;return Math.max(Math.min(k.map(this.props.top-h,f.height,-1*this.props.height,i,n),n),i)}}},this.update(),this.observer=new IntersectionObserver(n=>{n.forEach(i=>this.isVisible=i.intersectionRatio>0)}),this.observer.observe(this.DOM.el),this.initEvents()}update(){this.getSize();for(let e in this.renderedStyles)this.renderedStyles[e].current=this.renderedStyles[e].setValue();this.layout()}getSize(){let e=this.DOM.el.getBoundingClientRect();this.props={height:e.height,top:h+e.top}}initEvents(){window.addEventListener("resize",()=>this.resize())}resize(){this.update()}render(){for(let e in this.renderedStyles)this.renderedStyles[e].current=this.renderedStyles[e].setValue();this.layout()}layout(){this.DOM.image.style.transform=`translate3d(0,${this.renderedStyles.innerTranslationY.current}px,0)`}};v();var x=[];[...document.querySelectorAll(".parallax-img")].forEach(t=>{x.push(new m(t))});requestAnimationFrame(()=>{y()});function y(){for(let t of x)t.isVisible&&t.render();requestAnimationFrame(()=>y())}})();
//# sourceMappingURL=work.js.map
