'use strict';
$(document).ready(function (){

    $("a").click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });
    
    $(".toggle").click(function () {
        $(".down").toggleClass('downstart');
        $(".fade").toggleClass("fadestart");
        $(".up").toggleClass("upstart");
        $(".header__menu").toggleClass('header__menu--active');
        $(".logobox").toggleClass('logobox--disabled');
    });

    $(".item__link").click(function () {
        $(".toggle").click();
    });
});