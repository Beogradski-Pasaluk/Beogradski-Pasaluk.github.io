// const toggleButton = document.getElementById('dark-mode-button');
// const darkbody = document.body;

// // Check for saved 'darkMode' in localStorage
// const darkMode = localStorage.getItem('darkMode');

// if (darkMode) {
//     body.classList.add('dark-mode');
// }

// toggleButton.onclick = function() {
//     body.classList.toggle('dark-mode');

//     // Save the current preference to localStorage
//     localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
// }

//Darkmode switch
function DarkMode() {
  var darkbody = document.body;
  darkbody.classList.toggle("dark-mode");
}

//Luxury brown switch
// function LuxuryBrownMode() {
//   var element = document.body;
//   element.classList.toggle("luxury-brown-mode");
// }

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