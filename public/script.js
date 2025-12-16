// Fade-in sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
},{ threshold:0.1});
sections.forEach(section=>observer.observe(section));

// Carrousel
document.querySelectorAll('.carousel').forEach(carousel=>{
  const inner = carousel.querySelector('.carousel-inner');
  const items = carousel.querySelectorAll('.carousel-item');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  let index=0;
  function showSlide(i){
    if(i<0) index=items.length-1;
    else if(i>=items.length) index=0;
    else index=i;
    inner.style.transform=`translateX(-${index*100}%)`;
  }
  prev.addEventListener('click',()=>showSlide(index-1));
  next.addEventListener('click',()=>showSlide(index+1));
});
