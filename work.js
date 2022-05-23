(()=>{var l=class extends HTMLElement{constructor(){super();this.shadow=this.attachShadow({mode:"open"}),this.styleElem=document.createElement("style"),this.styleElem.textContent=`
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
        }`,this.shadow.appendChild(this.styleElem),this.link=document.createElement("a"),this.link.classList.add("link"),this.link.href=this.getAttribute("href"),this.textContain=document.createElement("div"),this.textContain.classList.add("text-contain"),this.text=document.createElement("p"),this.text.innerHTML="<slot></slot>",this.textContain.appendChild(this.text),this.link.appendChild(this.textContain),this.shadow.appendChild(this.link),this.link.addEventListener("mouseenter",function(){let t=document.createElement("span");t.classList.add("ripple"),this.appendChild(t),this.querySelector("p").classList.add("text-animation"),setTimeout(()=>{t.remove()},200)}),this.link.addEventListener("mouseleave",function(){this.querySelector("p").classList.remove("text-animation")})}};var a=!1,g=()=>{let e=document.querySelector(".nav-bar_menu"),t=document.querySelector(".nav-menu"),n=document.querySelectorAll(".nav-menu_link"),i=document.querySelectorAll(".nav-bar_link");e.addEventListener("click",()=>{e.classList.toggle("opened"),t.classList.toggle("opened"),a=!a}),n.forEach(s=>{s.addEventListener("click",r=>{n.forEach(o=>{o.classList.remove("select")}),r.target.classList.add("select"),e.classList.toggle("opened"),t.classList.toggle("opened"),a=!a})}),i.forEach(s=>{s.addEventListener("click",r=>{i.forEach(o=>{o.classList.remove("select")}),r.target.classList.add("select")})})},m=document.querySelector(".nav-bar"),v=0,c=0,p=!1;function q(e){let t=window.innerHeight/2,n=e-v;a?m.classList.remove("hidden"):Math.abs(n)>16&&(n>0&&!(e<=t)?m.classList.add("hidden"):m.classList.remove("hidden"))}window.addEventListener("scroll",function(e){c=window.pageYOffset||document.documentElement.scrollTop,p||window.requestAnimationFrame(function(){q(c),v=c<=0?0:c,p=!1}),p=!0});var A=1200,O=600,y=20,_=[{transform:"translateY(80%)",opacity:0},{opacity:.2},{transform:"translateY(0px)",opacity:1}],z={direction:"alternate",duration:O,delay:y,easing:"cubic-bezier(0.33, 1, 0.68, 1)",fill:"forwards"},x=()=>{let e=[],t=document.querySelectorAll("[data-splitting]");for(let n of t){n.classList.add("split-container");let i=n.innerText.split(" ");n.innerText="";for(let s in i){let r=i[s],o=I(),M=r.split("");for(let C of M){let f=Y(C);o.appendChild(f),e.push(f)}s!=i.length-1&&o.appendChild(D()),n.appendChild(o)}}setTimeout(n=>{for(let i in n){let s={...z};s.delay=y*i,n[i].animate(_,s)}},A,e)};function Y(e){let t=document.createElement("span");return t.classList.add("split_letter"),t.innerText=e,t}function D(){let e=document.createElement("span");return e.classList.add("split_whitespace"),e.innerHTML="&nbsp;",e}function I(){let e=document.createElement("span");return e.classList.add("split_word"),e}var V=1e3,d=document.querySelector(".board-transition"),w=()=>{let e=document.querySelectorAll("[data-link-out]");for(let t of e)t.addEventListener("click",E)};function E(e){e.preventDefault(),d.classList.remove("animate_enter"),d.classList.add("animate_leave"),e.target.removeEventListener("click",E),setTimeout(t=>{d.classList.remove("animate_leave"),d.classList.add("animate_enter"),t.target.click()},V,e)}customElements.define("animate-btn",l);g();x();w();var B={map:(e,t,n,i,s)=>(e-t)*(s-i)/(n-t)+i},L,k=()=>{L={width:window.innerWidth,height:window.innerHeight}};k();window.addEventListener("resize",k);var h,S=()=>{h=window.pageYOffset||document.documentElement.scrollTop};window.addEventListener("scroll",S);var u=class{constructor(t){this.DOM={el:t},this.DOM.image=this.DOM.el.querySelector(".parallax-img_bg"),this.renderedStyles={innerTranslationY:{current:0,maxValue:(parseInt(getComputedStyle(this.DOM.image).height,10)-parseInt(getComputedStyle(this.DOM.el).height,10))/2,setValue:()=>{let n=this.renderedStyles.innerTranslationY.maxValue,i=-1*n;return Math.max(Math.min(B.map(this.props.top-h,L.height,-1*this.props.height,i,n),n),i)}}},this.update(),this.observer=new IntersectionObserver(n=>{n.forEach(i=>this.isVisible=i.intersectionRatio>0)}),this.observer.observe(this.DOM.el),this.initEvents()}update(){this.getSize();for(let t in this.renderedStyles)this.renderedStyles[t].current=this.renderedStyles[t].setValue();this.layout()}getSize(){let t=this.DOM.el.getBoundingClientRect();this.props={height:t.height,top:h+t.top}}initEvents(){window.addEventListener("resize",()=>this.resize())}resize(){this.update()}render(){for(let t in this.renderedStyles)this.renderedStyles[t].current=this.renderedStyles[t].setValue();this.layout()}layout(){this.DOM.image.style.transform=`translate3d(0,${this.renderedStyles.innerTranslationY.current}px,0)`}};S();var b=[];[...document.querySelectorAll(".parallax-img")].forEach(e=>{b.push(new u(e))});requestAnimationFrame(()=>{T()});function T(){for(let e of b)e.isVisible&&e.render();requestAnimationFrame(()=>T())}})();
//# sourceMappingURL=work.js.map
