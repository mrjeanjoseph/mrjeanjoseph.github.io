

$(document).ready(function(){

    // sticky navigation menu

    let nav_offset_top = $('.banner_top').height() + 50;

    function navbarFixed(){
        if($('.banner_top').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.banner_top .main-menu').addClass('navbar_fixed');
                }else{
                    $('.banner_top .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();


});