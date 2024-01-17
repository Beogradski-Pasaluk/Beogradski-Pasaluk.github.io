//Lightmode switch
function LightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

//Darkmode switch
function DarkMode() {
  var element = document.body;
  // var icon = anchor.querySelector("svg");
  // icon.classList.toggle('bi bi-brightness-high-fill');
  // icon.classList.toggle('bi bi-moon-fill');
  element.classList.toggle("dark-mode");
}

//Luxury brown switch
function LuxuryBrownMode() {
  var element = document.body;
  element.classList.toggle("luxury-brown-mode");
}

// Auto Hide Navbar
document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    // navbar_height = document.querySelector('.navbar').offsetHeight;
    // document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
      var last_scroll_top = 5;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
    }  
  }); 