import './reset.css';
import './style.css';


// Solution functionality
const solutionButton = document.querySelector('.solution-button');
const solutionDiv = document.querySelector('.solution');
const closeSolutionButton = document.querySelector('.fa-times');
const $hamburgerButton = document.querySelector('.nav__button--hamburger');
const $closeButton = document.querySelector('.nav__button--close');
const $navList = document.querySelector('.nav__list');


const showSolution = () => {
    solutionDiv.classList.remove('hidden');
};

const closeSolution = () => {
    solutionDiv.classList.add('hidden');
};

const navigation = () => {

    const openMenu = () => {
        $navList.classList.add('visible');
        $navList.classList.remove('hidden');
        $hamburgerButton.classList.add('hidden');
        $closeButton.classList.add('visible');
        $closeButton.setAttribute('aria-expanded', 'true');
        $hamburgerButton.setAttribute('aria-expanded', 'false');
    };

    // Close the menu (hide the list, show hamburger icon, hide close icon)
    const closeMenu = () => {
        $navList.classList.add('hidden');
        $navList.classList.remove('visible');
        $hamburgerButton.classList.remove('hidden');
        $closeButton.classList.remove('visible');
        $closeButton.setAttribute('aria-expanded', 'false');
        $hamburgerButton.setAttribute('aria-expanded', 'true');
    };

    // Toggle the menu when clicking on the hamburger button or close button
    $hamburgerButton.addEventListener('click', openMenu);
    $closeButton.addEventListener('click', closeMenu);

    // Close the menu when Escape is pressed
    window.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
};


// Initialize event listeners for both features
const init = () => {
    // Solution feature
    if (solutionButton && solutionDiv && closeSolutionButton) {
        solutionButton.addEventListener('click', showSolution);
        closeSolutionButton.addEventListener('click', closeSolution);
    } else {
        console.error('Solution elements are missing!');
    }

    // Navigation feature
    navigation();
};

// Initialize script
init();

