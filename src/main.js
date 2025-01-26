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
const logo = document.querySelector('.logo');
const circles = document.querySelectorAll('.meter-circle, .compases-circle, .sharpener-circle');


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



const flipcard = () => {
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    });
});
}



const showSolution = () => {
    solutionDiv.classList.remove('hidden');
};
const closeSolution = () => {
    solutionDiv.classList.add('hidden');
};



const logoInteraction = () => {
    let holdTimer = null;

    const stopAllBlinking = () => {
        circles.forEach((circle) => {
            circle.classList.remove('blinking-red');
        });

        logo.classList.remove('visible');
        logo.classList.add('hidden');
    };

    const handleHold = (circle) => {
        if (circle.classList.contains('compases-circle')) {
            holdTimer = setTimeout(() => {
                logo.classList.remove('hidden');
                logo.classList.add('visible');
            }, 1000);
        } else {
            holdTimer = setTimeout(() => {
                circle.classList.add('blinking-red');
            }, 1000);
        }
    };

    const startHold = (e) => {
        const targetCircle = e.currentTarget;
        stopAllBlinking();
        handleHold(targetCircle);
    };

    const stopHold = () => {
        clearTimeout(holdTimer);
        holdTimer = null;
    };

    circles.forEach((circle) => {
        circle.addEventListener('mousedown', startHold);
        circle.addEventListener('mouseup', stopHold);
        circle.addEventListener('mouseleave', stopHold);
        circle.addEventListener('touchstart', startHold, { passive: true });
        circle.addEventListener('touchend', stopHold, { passive: true });
    });
};



const initBibleInteraction = () => {
    const bibleHoverImages = document.querySelector('.bible-hover-images');
    const map = document.querySelector('.map img');
    const ornate = document.querySelector('.ornate img');
    const snake = document.querySelector('.snake img');
    const pageText = document.querySelector('.bible-hover-page');
    const ornateText = document.querySelector('.bible-hover-ornate');
    const mapText = document.querySelector('.bible-hover-map');
    const woodcutText = document.querySelector('.bible-hover-woodcut');


    const resetVisibility = () => {
        map.style.opacity = '0';
        ornate.style.opacity = '0';
        snake.style.opacity = '0';
        pageText.style.opacity = '0';
        ornateText.style.opacity = '0';
        mapText.style.opacity = '0';
        woodcutText.style.opacity = '0';
    };

    const revealElement = (target) => {
        if (target === map) {
            map.style.opacity = '1';
            mapText.style.opacity = '1';
        } else if (target === ornate) {
            ornate.style.opacity = '1';
            ornateText.style.opacity = '1';
        } else if (target === snake) {
            snake.style.opacity = '1';
            woodcutText.style.opacity = '1';
        } else {
            pageText.style.opacity = '1';
        }
    };

    const handleHover = (event) => {
        resetVisibility();
        if ([map, ornate, snake].includes(event.target)) {
            revealElement(event.target);
        } else {
            revealElement(bibleHoverImages);
        }
    };

    const handleTouchMove = (event) => {
        const touch = event.touches[0];
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);

        if (targetElement) {
            if (targetElement === map || targetElement === ornate || targetElement === snake) {
                revealElement(targetElement);
            } else if (bibleHoverImages.contains(targetElement)) {
                revealElement(bibleHoverImages);
            }
        }
    };

    const initVisibility = () => {
        map.style.opacity = '0';
        ornate.style.opacity = '0';
        snake.style.opacity = '0';
        pageText.style.opacity = '0';
        ornateText.style.opacity = '0';
        mapText.style.opacity = '0';
        woodcutText.style.opacity = '0';
    };
    bibleHoverImages.addEventListener('mouseover', handleHover);
    bibleHoverImages.addEventListener('mouseleave', resetVisibility);
    bibleHoverImages.addEventListener('touchmove', handleTouchMove, { passive: true });

    initVisibility();
};



const moveBrownBubbles = () => {
    const createBubbleAnimation = (bubbleSelector, containerSelector) => {
        gsap.fromTo(bubbleSelector, {
            y: -100,
        }, {
            scrollTrigger: {
                trigger: containerSelector,
                start: "top 45%",
                end: "bottom top",
                scrub: true,
                markers: false,
                toggleActions: "play none none none",
            },
            y: 100,
            ease: "power2.out",
        });
    };

    createBubbleAnimation(".plantin-bubble", ".plantin-bubble-container");
    createBubbleAnimation(".identity-bubble", ".identity-bubble-container");
    createBubbleAnimation(".strategies-bubble", ".strategies-bubble-container");
};



const moveWhiteBubbles = () => {
        const createBubbleAnimation = (bubbleSelector, containerSelector) => {
            gsap.fromTo(bubbleSelector, {
                y: -100,
            }, {
                scrollTrigger: {
                    trigger: containerSelector,
                    start: "top 60%",
                    end: "bottom 10%",
                    scrub: true,
                    markers: false,
                    toggleActions: "play none none none",
                },
                y: 100,
                ease: "power2.out",
            });
        };

        createBubbleAnimation(".social-status", ".social-status-container");
        createBubbleAnimation(".audiences", ".audiences-container");
        createBubbleAnimation(".collectors", ".collectors-container");
        createBubbleAnimation(".proofreaders", ".proofreaders-container");
        createBubbleAnimation(".ultimate", ".ultimate-container");
};





const init = () => {
    gsap.registerPlugin(ScrollTrigger);

    if (solutionButton && solutionDiv && closeSolutionButton) {
        solutionButton.addEventListener('click', showSolution);
        closeSolutionButton.addEventListener('click', closeSolution);
    } else {
        console.error('Solution elements are missing!');
    }

    navigation();
    storyline();
    flipcard();
    logoInteraction();
    initBibleInteraction();
    moveBrownBubbles();
    moveWhiteBubbles();
};

init();