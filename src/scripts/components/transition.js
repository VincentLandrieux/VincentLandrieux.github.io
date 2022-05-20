//---VARIABLE---//
const TRANSITION_TIME = 1000;
const boardEl = document.querySelector(".board-transition");


//---MAIN---//
export default () => {

    const outLinks = document.querySelectorAll('[data-link-out]');

    for(const _link of outLinks){
        _link.addEventListener("click", onCLick);
    }
}


//---FUNCTION---//
function onCLick(_e){
    _e.preventDefault();

    boardEl.classList.remove("animate_enter");
    boardEl.classList.add("animate_leave");

    _e.target.removeEventListener("click", onCLick);

    setTimeout(
        (_e) => {
            _e.target.click();
        }, 
        TRANSITION_TIME, 
        _e
    );
}