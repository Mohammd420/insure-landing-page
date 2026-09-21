// Get Dom Elements
let navUl = document.querySelector('.nav-links');
let openBtn = document.querySelector('.menu-btn');
let navA = document.querySelectorAll('.nav-links li a');

function openNav() {
    openBtn.onclick = () => {
        navUl.classList.toggle('open');
        // Check Open Class
        if (navUl.classList.contains('open')) {
            openBtn.setAttribute('src', 'images/icon-close.svg')
        } else {
            openBtn.setAttribute('src', 'images/icon-hamburger.svg')
        };
    }
};

//Create Remove/Add Function
function activeClass() {
    navA.forEach(element => {
        element.onclick = () => {
            //Add Class Active
            element.classList.add('active');
            //reomve active class
            navA.forEach(ele => {
                ele.classList.remove('active');
            });
            element.classList.add('active');
        };
    });
};

let observer = new IntersectionObserver((sections) => {
    sections.forEach(section => {
        if (section.isIntersecting) {
            section.target.classList.add('show');
        }
    })
})

let hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

activeClass()
openNav()