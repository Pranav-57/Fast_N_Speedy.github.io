const toggle = document.getElementById('toggle');
const navItemContainer = document.getElementById('nav_item_container');

toggle.addEventListener('click', () => {
    if(document.getElementById('nav_item_container').clientHeight)
    {
        navItemContainer.style.height = 0;
        navItemContainer.style.padding = 0;
    }
    else{
        navItemContainer.style.height = "160px";
        navItemContainer.style.padding = "10px";
    }
    // navItemContainer.classList.toggle('height_0');
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });