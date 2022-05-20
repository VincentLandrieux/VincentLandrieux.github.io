//---IMPORT---//
import projets from './components/projets.js'
import nav from './components/nav.js'
import splitting from './components/splitting.js'
import leaveTransition from './components/transition.js'


//---MAIN---//
// Nav
nav();

// Projects
projets()
.then(() => {

    // Transition;
    leaveTransition();

})
.catch(() => {
    leaveTransition();
});

// Splitting
splitting();