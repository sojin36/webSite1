// 상품 스와이퍼
const proSwiper = new Swiper(".productSwiper", {
    loop: true,
// 반응형
breakpoints : {
    0:{
        slidesPerView: 1,
        spaceBetween: 15,
    },
    390:{
        slidesPerView: 2,
        spaceBetween: 15,
    },
    768:{
        slidesPerView: 3.3,
        spaceBetween: 24,
    }
}
});

// 모바일 메뉴
const hambar = document.querySelector("#hamburger")
const mbmenu = document.querySelector("#mobile-menu")
hambar.addEventListener("click",()=>{
    mbmenu.classList.add("active");
});