// slider
const slideItems = document.querySelectorAll('.slider-item');


const rectangles = document.querySelectorAll('.rectangle');
const sliders = document.querySelectorAll('.content-box');


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


 