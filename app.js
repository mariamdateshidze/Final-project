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
     handleRecClick(projectsindex);
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

























// filterObjects("all");

// function filterObjects(c){
//   let x, i;
//   x = document.querySelectorAll('.image')
//   if (c === "all") c ="";
//   for (i = 0; i < x.length; i++){
//     removeClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) addClass(x[i], "show")
//   }
// }

// function addClass(element, name){
//   let i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++){
//     if (arr1.indexOf(arr2[i] == -1)){
//       element.className += " " + arr2[i];
//     }
//   }

// }

// function removeClass(element, name){
//   let i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++){
//     while (arr1.indexOf(arr2[i])){
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");

// }