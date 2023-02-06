let itemsSlider = document.querySelectorAll('.overflow-navbar__menu_item');
for(let i = 0; itemsSlider.length > i; i++){
    itemsSlider[i].addEventListener('click', function(){
        if(trigger.hasClass("active")){
            trigger.removeClass("active");
            across.addClass("d-none");
            bars.removeClass("d-none");
            slideMenu.css({
                'height': 0,
            });
        }
    });
}
let trigger = $('.navbar-button');
let across = $('.navbar i.bx-x');
let bars = $('.navbar i.bx-menu');
let slideMenu = $('.overflow');
trigger.on('click', function(){
    let slideHeight = $('.overflow-navbar__menu').innerHeight();
    if(trigger.hasClass("active")){
        trigger.removeClass("active");
        across.addClass("d-none");
        bars.removeClass("d-none");
        slideMenu.css({
            'height': 0,
        });
    }
    else{
        trigger.addClass("active");
        bars.addClass("d-none");
        across.removeClass("d-none");
        slideMenu.css({
            'height': slideHeight + 'px',
        });
    }
});
function paddingTopNavbarOverflow(){
    let navbar = $(".navbar");
    let navbarHeight = navbar.innerHeight();
    slideMenu.css({
        'top': navbarHeight + 'px',
    });
    let headerCont = $(".main-header .container");
    headerCont.css({
        'padding-top': navbarHeight + 'px',
    });
}
paddingTopNavbarOverflow();
$(window).resize(function() {
    if(trigger.hasClass("active")){
        trigger.removeClass("active");
        across.addClass("d-none");
        bars.removeClass("d-none");
        slideMenu.css({
            'height': 0,
        });
    }
    paddingTopNavbarOverflow();
});
let itemsMenu = document.querySelectorAll('.navbar-menu__item');
let itemsLine = document.querySelectorAll('.navbar-menu__item_line');
for(let i = 0; itemsMenu.length > i; i++){
    itemsMenu[i].addEventListener('mouseover', function(){
        let j = i;
        for(let i = 0; itemsMenu[j].clientWidth > i; i++){
            itemsLine[j].style.width = i + 'px';
        }
    });
}
for(let i = 0; itemsMenu.length > i; i++){
    itemsMenu[i].addEventListener('mouseout', function(){
        let j = i;
        itemsLine[j].style.width = 0;
    });
}
window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})