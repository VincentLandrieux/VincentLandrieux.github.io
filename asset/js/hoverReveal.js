function hoverReveal(){
    const hoverTime = 200;
    const hoverEase = 'cubic-bezier(0.61, 1, 0.88, 1)';

    let animationEnd = null;

    let mX = 0;
    let movementX = 0;
    document.addEventListener("mousemove", (e) => {
        movementX = e.pageX - mX;
        mX = e.pageX;
    });

    let highlights = document.querySelectorAll('.highlight[data-img]');

    highlights.forEach((item) => {
        let reveal = document.createElement('div');
        reveal.className = 'hover-reveal';
            let revealInner = document.createElement('div');
            revealInner.className = 'hover-reveal__inner';
                let revealImage = document.createElement('div');
                revealImage.className = 'hover-reveal__img';
                revealImage.style.backgroundImage = `url(${item.dataset.img})`;
                revealInner.appendChild(revealImage);
            reveal.appendChild(revealInner);
        item.appendChild(reveal);

        item.addEventListener('mouseenter', () => {
            if(animationEnd){
                animationEnd.cancel();
            }

            reveal.style.opacity = 1;
            reveal.style.zIndex = 1;

            revealInner.animate([
                // keyframes
                {
                    transform: `translateX(${movementX < 0 ? '100%' : '-100%'})`,
                },
                {
                    transform: 'translateX(0px)',
                }
            ], {
                // timing options
                duration: hoverTime,
                easing: hoverEase,
                fill: 'forwards'
            });
            revealImage.animate([
                // keyframes
                {
                    transform: `translateX(${movementX < 0 ? '-100%' : '100%'})`,
                },
                {
                    transform: 'translateX(0px)',
                }
            ], {
                // timing options
                duration: hoverTime,
                easing: hoverEase,
                fill: 'forwards'
            });
        });
        item.addEventListener('mouseleave', async () => {
            revealInner.animate([
                // keyframes
                {
                    transform: 'translateX(0px)',
                },
                {
                    transform: `translateX(${movementX < 0 ? '-100%' : '100%'})`,
                }
            ], {
                // timing options
                duration: hoverTime,
                easing: hoverEase,
                fill: 'forwards'
            });
            revealImage.animate([
                // keyframes
                {
                    transform: 'translateX(0px)',
                },
                {
                    transform: `translateX(${movementX < 0 ? '100%' : '-100%'})`,
                }
            ], {
                // timing options
                duration: hoverTime,
                easing: hoverEase,
                fill: 'forwards'
            });
            animationEnd = reveal.animate([
                // keyframes
                {
                    opacity: 1,
                    zIndex: 1
                },
                {
                    opacity: 0,
                    zIndex: -1
                }
            ], {
                // timing options
                duration: 1,
                delay: hoverTime,
                fill: 'forwards'
            });
            animationEnd.oncancel = () => {
                animationEnd.commitStyles();
            };
            animationEnd.onfinish = () => {
                animationEnd.cancel();
            };
            
        });

        item.addEventListener("mousemove", (e) => {
            reveal.style.top = (e.offsetY - reveal.clientHeight/2)+'px';
            reveal.style.left = (e.offsetX - reveal.clientWidth/2)+'px';
        });
    });
}

export default hoverReveal;
