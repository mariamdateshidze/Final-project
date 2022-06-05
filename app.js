// slider
const slideItems = document.querySelectorAll('.slider-item');

const rectangles = document.querySelectorAll('.rectangle');
const sliders = document.querySelectorAll('.content-box');

const projectsTitles = document.querySelectorAll('.project-title');
const projects = document.querySelectorAll('.image');
const pinkLine = document.querySelectorAll('.pink-line');


let myInterval=null;
let activeIndex = 0;

initSlider();
function initSlider(){
    renderSliders();
    startAutoSliding();

}

function startAutoSliding(){
    myInterval = setInterval(showNextSlide, 5000);
  }

function renderSliders() {
    slideItems.forEach((item, i) => {
      if(activeIndex === i){
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    })
  }

function showNextSlide() {
activeIndex = activeIndex + 1;
if(activeIndex > slideItems.length - 1){
    activeIndex = 0;
}
renderSliders();
}


// skills section
const skillsSection=document.getElementById('skills-section')
const progressBars=document.querySelectorAll('.progress-bar')

function showProgress(){
    progressBars.forEach(progressBar=>{
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;

    });
}

function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    })
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight /2;

    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
});


// rectangle buttons
rectangles.forEach((rectangle ,rectanglesindex) => {
    rectangle.addEventListener('click', () => {
        handleRecClick(rectanglesindex);
        
    });
});

function sliderButtons() {
  sliders.forEach((item, i) => {
    if(activeIndex === i){
      item.classList.add('active');

    } else {
      item.classList.remove('active');
    }
  })

  rectangles.forEach((item, i) => {
    if(activeIndex === i){
      item.classList.add('active');

    } else {
      item.classList.remove('active');
    }
  })
}

function handleRecClick(nextIndex){
  activeIndex = nextIndex;
  sliderButtons();

}

// latest projects
projectsTitles.forEach((project, projectsindex) => {
  project.addEventListener('click', () => {
     handleClick(projectsindex);
     latestprojects();
  });
});

function latestprojects() {
  projectsTitles.forEach((item, i) => {
  if(activeIndex === i){
    item.classList.add('active');

  } else {
    item.classList.remove('active');
  }
});

  pinkLine.forEach((item, i) => {
    if(activeIndex === i){
      item.classList.add('active');

    } else {
      item.classList.remove('active');
    }
  });
}

function handleClick(nextIndex){
  activeIndex = nextIndex;
  latestprojects();
}


//  filter projects
for (i = 0; i < projectsTitles.length; i++) {
  projectsTitles[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    
    projects.forEach((project) => {
      if (filter == "all") {
        project.style.display = "block"

      } else {
        if (project.classList.contains(filter)) {
          project.style.display = "block"
        }else {
          project.style.display = "none"
        }
      }
    })
  })
}

// form
const signupForm = document.querySelector('#user-signup-form');
const first_name = document.querySelector('#first_name');
const email = document.querySelector('#email');
const website = document.querySelector('#website');
const message = document.querySelector('#message');

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const userData = {
    first_name: first_name.value,
    email: email.value,
    website: website.value,
    message: message.value,
  };
  createUser(userData);
  signupForm.reset();
 
});

async function createUser(userData){
  try {
    const response = await fetch('http://api.kesho.me/v1/user-test/contact', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {'Content-Type': 'application/json'}
    });
    await response.json();
   
  }catch (e){
    console.log('Error - ', e);
  }
}

const modalOpenBtn = document.querySelector('#send-btn');
const myModal = document.querySelector('.my-modal');

modalOpenBtn.addEventListener('click', () => {
  openModal('.my-modal');
})

function openModal(modalSelector){
    const modalNode = document.querySelector(modalSelector);
    modalNode.classList.add('visible');

    const closeBtn = modalNode.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
         closeModal(modalSelector)
  })
}
function closeModal(modalSelector){
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.remove('visible');
  
}

