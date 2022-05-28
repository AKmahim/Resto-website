// menu bar section
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.replace("re-menu-line","ri-close-line");
    navbar.classList.toggle('show');


}

// ==========
// scroll indicator

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  navbar.classList.remove('show');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}


// =============== search button ========
let searchBar = document.querySelector('#search-bar');
let searchForm = document.querySelector('#search-form');
let close = document.querySelector("#close");

searchBar.onclick = () =>{
    
    searchForm.classList.toggle('showform');



}

close.onclick = ()=>{
    searchForm.classList.remove('showform');
}




// =========== swiper card =========

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  
});


// =========== swiper for review section 

var swiper = new Swiper(".review-container", {
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  loop:true,
  
});