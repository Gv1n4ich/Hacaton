const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function slideUp() {
  slides[currentIndex].classList.add('slide-up');
}

function slideDown() {
  slides[currentIndex].classList.remove('slide-up');
}

function nextSlide() {
  slideUp();
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
  setTimeout(slideDown, 500); 
}

function previousSlide() {
  slideUp();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
  setTimeout(slideDown, 500); 
}

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 2000); 
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    nextSlide();
  } else if (event.key === 'ArrowLeft') {
    previousSlide();
  }
});

document.addEventListener('swiped-left', nextSlide);
document.addEventListener('swiped-right', previousSlide);

showSlide(currentIndex);
setTimeout(autoSlide, 2000); 

close_btn = document.getElementById('close')
remove_btn = document.getElementById('remove')
like_btn = document.getElementById('like')

remove_btn.addEventListener('click',() => {
    previousSlide();
})

like_btn.addEventListener('click',()=>{
    nextSlide();
})

const slide = document.querySelector('.slide')

close_btn.addEventListener('click',()=>{
    if(slide.classList.contains('active')){
        slide.remove();
        nextSlide();
    }
})

const reload_btn = document.querySelector('.reload')

reload_btn.addEventListener('click', ()=>{
    document.location.reload();
})
