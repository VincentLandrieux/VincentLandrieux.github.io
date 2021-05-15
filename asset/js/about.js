import {observer} from './observer.js';
import hoverReveal from './hoverReveal.js';
import AnimateBtn from './animateBtn.js';

observer();
hoverReveal();

customElements.define('animate-btn', AnimateBtn);
