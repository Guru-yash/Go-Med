const listItems = document.querySelectorAll('.li-study');

listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        listItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('blur');
            }
        });
        item.classList.add('active');
    });

    item.addEventListener('mouseout', () => {
        listItems.forEach(otherItem => {
            otherItem.classList.remove('blur');
        });
        item.classList.remove('active');
    });
});


const cards = document.querySelectorAll('.card');
const cardContainer = document.querySelector('.card-container');

cards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        cards.forEach((otherCard) => {
            otherCard.classList.remove('active');
        });
        card.classList.add('active');
    });
});

const section = document.querySelector('.Admission');
const containers = document.querySelectorAll('.add_container');
const timeline = document.querySelector('.timeline');

let scrollPosition = 0;
let animationTriggered = false;

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    if (scrollPosition >= sectionTop - viewportHeight / 2 && scrollPosition <= sectionTop + sectionHeight + viewportHeight / 2) {
        if (!animationTriggered) {
            containers.forEach((container, index) => {
                container.classList.add('animate');
            });
            timeline.classList.add('animate');
            animationTriggered = true;
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('country');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        select.appendChild(option);
    });
});

document.querySelector('.sign-in-form').addEventListener('submit', function (event) {
    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    this.classList.add('was-validated');
});