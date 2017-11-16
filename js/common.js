'use strict';
$(document).ready(function (){
    
    $(".toggle").click(function () {
        $(".down").toggleClass('downstart');
        $(".fade").toggleClass("fadestart");
        $(".up").toggleClass("upstart");
    });

    $(".toggle").click(function () {
        $(".header__menu").toggleClass('header__menu--active');
        $(".logobox").toggleClass('logobox--disabled');
    });
});