import './reset.css';
import './style.css';

const $hamburgerButton = document.querySelector('.nav__button--hamburger');
const $closeButton = document.querySelector('.nav__button--close');
const $navList = document.querySelector('.nav__list');
const bubbles = document.querySelectorAll('.bubble');
const storylineImages = document.querySelectorAll('.storyline-images picture');
const solutionButton = document.querySelector('.solution-button');
const solutionDiv = document.querySelector('.solution');
const closeSolutionButton = document.querySelector('.fa-times');


const navigation = () => {

    const openMenu = () => {
        $navList.classList.add('visible');
        $navList.classList.remove('hidden');
        $hamburgerButton.classList.add('hidden');
        $closeButton.classList.add('visible');
        $closeButton.setAttribute('aria-expanded', 'true');
        $hamburgerButton.setAttribute('aria-expanded', 'false');
    };

    const closeMenu = () => {
        $navList.classList.add('hidden');
        $navList.classList.remove('visible');
        $hamburgerButton.classList.remove('hidden');
        $closeButton.classList.remove('visible');
        $closeButton.setAttribute('aria-expanded', 'false');
        $hamburgerButton.setAttribute('aria-expanded', 'true');
    };

    $hamburgerButton.addEventListener('click', openMenu);
    $closeButton.addEventListener('click', closeMenu);

    window.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
};

const storyline = () => {
bubbles.forEach((bubble, index) => {
    bubble.addEventListener('click', () => {

        bubbles.forEach(b => b.classList.remove('selected'));
        storylineImages.forEach(image => image.classList.add('hidden'));

        bubble.classList.add('selected');
        storylineImages[index].classList.remove('hidden');
    });
});
}



const showSolution = () => {
    solutionDiv.classList.remove('hidden');
};
const closeSolution = () => {
    solutionDiv.classList.add('hidden');
};



const init = () => {

    if (solutionButton && solutionDiv && closeSolutionButton) {
        solutionButton.addEventListener('click', showSolution);
        closeSolutionButton.addEventListener('click', closeSolution);
    } else {
        console.error('Solution elements are missing!');
    }

    storyline();
    navigation();
};

init();

