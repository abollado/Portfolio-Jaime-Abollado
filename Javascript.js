
// Efecto para el nav
let nav= document.getElementById("nav");
let menu = document.getElementById("enlaces");

function menus(){
    let Desplazamiento_actual = window.pageYOffset;

    if(Desplazamiento_actual <=300){
        nav.classList.remove("nav2");
        nav.className = ("nav1");
        nav.style.transition="1s";

    }else{

        nav.classList.remove("nav1");
        nav.className = ("nav2");

    }
}

window.addEventListener("scroll", function(){
    console.log(this.window.pageYOffset);
    menus();
});

 window.addEventListener("load", function(){
     $("#onload").fadeOut();
     $("body").removeClass("hideden");
 menus();
 });

 //Navegacion 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Filtros

var checkClass = function() {
  
    // Remove Existing Hide 
    if ( $('.cont-work').hasClass('hide') ) {
      $('.cont-work').removeClass('hide'); 
    }
    
  };
  
  // Click Design
  $('#design').click( function() {
    
    // Check Class
    checkClass();
    
    // Hide Other Stuff
    $('.cont-work:not(.design)').toggleClass('hide');
  
  });

// Click Prototipes
$('#prototipes').click( function() {
    
    // Check Class
    checkClass();
    
    // Hide Other Stuff
    $('.cont-work:not(.prototipes)').toggleClass('hide');
  
  });


  // Click art
  $('#art').click( function() {
    
    // Check Class
    checkClass();
    
    // Hide Other Stuff
    $('.cont-work:not(.art)').toggleClass('hide');
  
  });
  
  
  // Click Illustration
  $('#illus').click( function() {
    
      checkClass();
      $('.cont-work img:not(.illus)').toggleClass('hide');
    
  });
  
  // Click Logo
  $('#logo').click( function() {
   
      checkClass();
      $('.cont-work img:not(.logo)').toggleClass('hide');
    
  });
  
  // Show All 
  $('#galeria-work').click( function() {
    
    checkClass();
    
  });
  
  