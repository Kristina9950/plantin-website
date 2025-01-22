import './style.css'

const solutionButton = document.querySelector('.solution-button');
const solutionDiv = document.querySelector('.solution');
const closeSolutionButton = document.querySelector('.fa-times');

function showSolution() {
    solutionDiv.classList.remove('hidden');
}
function closeSolution() {
    solutionDiv.classList.add('hidden');
}

// Add the event listener
solutionButton.addEventListener('click', showSolution);
closeSolutionButton.addEventListener('click', closeSolution);

