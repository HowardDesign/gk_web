
// 關於我們  遊戲卡輪播slider
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    // freeMode: true,
    // cssMode: true,
    loop: true,
    // mousewheel: {
    //     invert: false,
    // },

    // 循環播放
    autoplay: {
        delay: 5000,
        disableOnInteraction: false, // 點擊後 繼續輪播
    },

    autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});
