const sliderImages = document.querySelector('.slider');
const sliderNavItems = document.querySelectorAll('.slider-nav-item');
let slideIndex = 0;
//Menu dính khi lăn chuột
window.addEventListener("scroll",function(){
    var header =document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY >0);
})


//Slide ảnh + Auto chạy slide
setInterval(() => {
  slideIndex = (slideIndex + 1) % sliderNavItems.length;
  setActiveSlide(slideIndex);
}, 3000);

function setActiveSlide(index) {
  sliderNavItems.forEach(item => item.classList.remove('active'));
  sliderNavItems[index].classList.add('active');
  sliderImages.style.transform = `translateX(-${index * 100}%)`;
}

sliderNavItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    slideIndex = index;
    setActiveSlide(slideIndex);
  });
});