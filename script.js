//slider

var h1_slider = document.querySelector('.h1-slider');
var bg_image = document.querySelector('.header');
var slider = document.querySelector('.slider');
var img_layer1 = document.querySelector('.img-layer1');
var img_layer2 = document.querySelector('.img-layer2');
var img_layer3 = document.querySelector('.img-layer3');
var img_layer4 = document.querySelector('.img-layer4');
var fadeIn_h1 = document.querySelector('.fadeIn-h1');

function changeBackgroundAndText() {
    if (h1_slider.innerHTML == 'Take the challenge and turn this prototype into a functional html page') {
        fadeIn_h1.style.animation = 'fadeOut linear 2s';
        bg_image.style.backgroundImage = 'url("elements/images/pexels-thisisengineering-3861972\ 2.jpg")';
        bg_image.style.transition = '2s ease';
        h1_slider.innerHTML = 'Welcome to our Next Front End Developer challenge';
        img_layer1.src = 'elements/icons/arrow-left-slider-beige.svg';
        img_layer2.src = 'elements/icons/slash.svg';
        img_layer3.src = 'elements/icons/arrow-right-slider-beige.svg';
        img_layer4.src = 'elements/icons/arrow_nav.svg';
        if (window.innerWidth >= 768 && (window.innerWidth < 1024) && !(window.innerWidth < 768)) {
            img_layer1.style.transition = '2s ease';
            img_layer1.style.marginTop = '10%';
            img_layer2.style.transform = 'rotate(180deg)';
            img_layer2.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.transform = 'rotate(360deg)';
            img_layer3.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.marginTop = '20%';
            img_layer4.style.transition = '2s ease';
            img_layer4.style.marginLeft = '90%';
        } else if (window.innerWidth >= 1024 && (window.innerWidth < 1440)) {
            img_layer1.style.transition = '2s ease';
            img_layer1.style.marginTop = '0';
            img_layer2.style.transform = 'rotate(180deg)';
            img_layer2.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.transform = 'rotate(360deg)';
            img_layer3.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.marginTop = '5%';
            img_layer4.style.transition = '2s ease';
            img_layer4.style.marginLeft = '90%';
        } else if (window.innerWidth >= 1440) {
            img_layer1.style.transition = '2s ease';
            img_layer1.style.marginTop = '0';
            img_layer2.style.transform = 'rotate(180deg)';
            img_layer2.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.transform = 'rotate(360deg)';
            img_layer3.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.marginTop = '10%';
            img_layer4.style.transition = '2s ease';
            img_layer4.style.marginLeft = '90%';
        }
    } 
    else if (h1_slider.innerHTML == 'Welcome to our Next Front End Developer challenge') {
        fadeIn_h1.style.animation = 'fadeIn linear 2s';
        bg_image.style.backgroundImage = 'url("elements/images/pexels-christina-morillo-1181271\ 1.jpg")';
        bg_image.style.transition = '2s ease';
        h1_slider.innerHTML = 'Take the challenge and turn this prototype into a functional html page';
        img_layer1.src = 'elements/icons/arrow-left-slider-gr.svg';
        img_layer2.src = 'elements/icons/slash-gr.svg';
        img_layer3.src = 'elements/icons/arrow-right-slider-gr.svg';
        img_layer4.src = 'elements/icons/arrow-nav-gr.svg';
        if (window.innerWidth >= 768 && (window.innerWidth < 1024) && !(window.innerWidth < 768)) {
            img_layer1.style.transition = '2s ease';
            img_layer1.style.marginTop = '20%';
            img_layer2.style.transform = 'rotate(-180deg)';
            img_layer2.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.transform = 'rotate(-360deg)';
            img_layer3.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.marginTop = '10%';
            img_layer4.style.transition = '2s ease';
            img_layer4.style.marginLeft = '0';
        } else if (window.innerWidth >= 1024 && (window.innerWidth < 1440)) {
            img_layer1.style.transition = '2s ease';
            img_layer1.style.marginTop = '5%';
            img_layer2.style.transform = 'rotate(-180deg)';
            img_layer2.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.transform = 'rotate(-360deg)';
            img_layer3.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.marginTop = '0';
            img_layer4.style.transition = '2s ease';
            img_layer4.style.marginLeft = '5%';
        } else if (window.innerWidth >= 1440) {
            img_layer1.style.transition = '2s ease';
            img_layer1.style.marginTop = '10%';
            img_layer2.style.transform = 'rotate(-180deg)';
            img_layer2.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.transform = 'rotate(-360deg)';
            img_layer3.style.transition = '2s, 2s, transform 2s';
            img_layer3.style.marginTop = '0';
            img_layer4.style.transition = '2s ease';
            img_layer4.style.marginLeft = '5%';
        }
    }
};

//cursor

jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 30;
      mouseY = e.pageY - 30; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 20);
  
  });

//menu for smaller devices hide when click outside navbar

$(document).click(function(event) {
    $(event.target).closest(".navbar").length || $(".navbar-collapse.show").length && $(".navbar-collapse.show").collapse("hide")
});
  
//back to top btn

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}