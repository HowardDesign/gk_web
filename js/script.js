(function ($) {
    var size;

    //SMALLER HEADER WHEN SCROLL PAGE
    function smallerMenu() {
        var sc = $(window).scrollTop();
        if (sc > 40) {
            $('#header-sroll').addClass('small');
        } else {
            $('#header-sroll').removeClass('small');
        }
    }

    // VERIFY WINDOW SIZE
    function windowSize() {
        size = $(document).width();
        if (size >= 991) {
            $('body').removeClass('open-menu');
            $('.hamburger-menu .bar').removeClass('animate');
        }
    };

    // ESC BUTTON ACTION
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('.bar').removeClass('animate');
            $('body').removeClass('open-menu');
            $('header .desk-menu .menu-container .menu .menu-item-has-children a ul').each(function (index) {
                $(this).removeClass('open-sub');
            });
        }
    });

    $('#cd-primary-nav > li').hover(function () {
        $whidt_item = $(this).width();
        $whidt_item = $whidt_item - 8;

        $prevEl = $(this).prev('li');
        $preWidth = $(this).prev('li').width();
        var pos = $(this).position();
        pos = pos.left + 4;
        $('header .desk-menu .menu-container .menu>li.line').css({
            width: $whidt_item,
            left: pos,
            opacity: 1
        });
    });

    // ANIMATE HAMBURGER MENU
    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu .bar').toggleClass('animate');
        if ($('body').hasClass('open-menu')) {
            $('body').removeClass('open-menu');

            // CLOSE SUB MENU
            $("header .desk-menu .menu-container .menu .menu-item-has-children ul").each(
                function (index) {
                    $(this).removeClass("open-sub");
                }
            );
        } else {
            $('body').toggleClass('open-menu');
        }
    });

    $('header .desk-menu .menu-container .menu .menu-item-has-children ul').each(function (index) {
        $(this).prepend('<li class="back"><a href="#">Back</a></li>');
        // append 放後面，prepend 放前面
    });

    // RESPONSIVE MENU NAVIGATION
    $('header .desk-menu .menu-container .menu .menu-item-has-children > a').on('click', function (e) {
        e.preventDefault();
        if (size <= 991) {
            $(this).next('ul').addClass('open-sub');
        }
    });

    // CLICK FUNCTION BACK MENU RESPONSIVE
    $('header .desk-menu .menu-container .menu .menu-item-has-children ul .back').on('click', function (e) {
        e.preventDefault();
        $(this).parent('ul').removeClass('open-sub');
    });

    $('body .over-menu').on('click', function () {
        $('body').removeClass('open-menu');
        $('.bar').removeClass('animate');

        // CLOSE SUB MENU
        $("header .desk-menu .menu-container .menu .menu-item-has-children ul").each(
            function (index) {
                $(this).removeClass("open-sub");
            }
        );
    });


    // btn animation
    $('a.btn-main').each(function () {
        var text = jQuery(this).text();
        jQuery(this).attr('data-hover', text);
        //alert(jQuery(this).attr('data-hover'));
    });

    ///////////////////////  total
    $(document).ready(function () {
        windowSize();
    });
    $(window).scroll(function () {
        smallerMenu();
    });
    $(window).resize(function () {
        windowSize();
    });

})(jQuery);



// 數字跳動
$('.amount > p').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


///////////////////////  go top
// (A) SHOW/HIDE BUTTON ON SCROLL/RESIZE
const togtop = () =>
    document.getElementById("backtop").style.display = window.scrollY >= 100 ? "flex" : "none";

// (B) LISTEN TO SCROLL + RESIZE
window.addEventListener("scroll", togtop);
window.addEventListener("resize", togtop);



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        // 檢查目前捲動位置是否在該 section 內
        // if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // 高亮顯示目前 section
            // current.classList.add('active');
        // } else {
            // 移除高亮
            // current.classList.remove('active');
        // }


        // if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        //     document.querySelector('.namenu-header-container a[href*=' + sectionId + ']').classList.add('active-link')
        // }else{
        //     document.querySelector('.menu-header-container a[href*=' + sectionId + ']').classList.remove('active-link')
        // }
    })
}
window.addEventListener('scroll', scrollActive)
