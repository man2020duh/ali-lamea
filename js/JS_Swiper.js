      var swiper2 = new Swiper(".mySwiper1", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      var swiper3 = new Swiper(".mySwiper3", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,          
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });