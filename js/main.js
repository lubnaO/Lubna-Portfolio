var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        // when window width is >= 768 from ipad and higher will be 4 slides
        768: {
          slidesPerView: 4,
          spaceBetween: 20
        },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  