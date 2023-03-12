window.addEventListener("scroll",function(){
    var menu =document.querySelector(".header menu");
    menu.classList.toggle("sticky",window.scrollY >0);
})