











//------------FUNCTIONS ------//

(function () {

  /******* VARIABLES ********/


  let images = [
    "images/windows2.png",
    "images/tribute.png",
    "images/musicblog.png"];

    let i = 0;

// function to get element by ID

function getID(element) {

  let theID = document.getElementById(element);
  return theID;

};

    function bodyColor() {
      let body = getID("body");

      if (body.className !== 'clicked') {
        body.className = 'clicked';
      }
      else {
        body.className = '';
      }

    };

    function navColor() {

      $('#nav_button').toggleClass('clicked');
    };

    function aboutToggle() {
      $('#mob_about_page').fadeIn('500');
      $('#body').addClass('clicked');
        $('h1, h2').toggle();
    };


    function fadeOut() {
      $('#mob_about_page, .mob_contact_page, #mob_projects_page').fadeOut('500');
    };

    function menuBlue() {
      if ($('#mob_about_page, .mob_contact_page, #mob_projects_page').is(':visible')) {
        $('#body').toggleClass('clicked');
      }
    }

    function projectsToggle() {

      $('#mob_projects_page').fadeIn('500');
      $('#body').addClass('clicked');
      $('h1, h2').toggle();
    };

    function contactToggle() {

      $('.mob_contact_page').fadeIn('500');
      $('#body').addClass('clicked');
      $('h1, h2').toggle();
    };

    function mobPageToggle() {

  if (!$('#mob_page').is(':visible')) {
    $('#mob_page').fadeIn('500');
  }

  else {
    $('#mob_page').hide();


  }

};

function pagesToggle() {

  let menu_clicked = getID('menu_clicked');
  if (menu_clicked.style.display === 'block') {
    menu_clicked.style.display = 'none';

    $('#mob_title_page').show();
    $('h1, h2').show();

    $('#mob_about_page').hide();

    $('#mob_projects_page').hide();

    $('.mob_contact_page').hide();

  }
  else {
    $('#menu_clicked').fadeIn('500');
  }
};

function socialToggle() {
  $('.social').fadeToggle('400');
};


function transitions() {
  let navButton = getID('nav_button');
  body.style.transition = '0.5s';
  navButton.style.transition = '0.5s';

};

function toggleMenuClose() {

  if ($('#menuText').text() == "Menu"){
    $('#close').toggle();
    $('#menuText').toggle();
  }
};


function getImages() {


  $('#slider').attr('src',images[i]);
};




function navButtonTweak() {

  if (true) {

  }
}
//
// ClICK EVENTS //
$('#nav_button').click(function(event) {
  transitions();
  menuBlue();
});

$('#nav_button, #mob_about, #mob_projects, #mob_contact').click(function(event) {
  bodyColor();
  navColor();
  mobPageToggle();
  pagesToggle();
  socialToggle();
  toggleMenuClose();
  fadeOut();

});
$('#mob_about').click(function(event) {
  aboutToggle();
});

$('#mob_projects').click(function(event) {
  projectsToggle();
  getImages();

});

$('#mob_contact').click(function(event) {
  contactToggle();
});

$('#rightArrow').click(function(event) {

  i++;
  if (i > images.length - 1) {
    i = 0;
  };
  getImages();

});

$('#leftArrow').click(function(event) {
  i--;
  if (i < 0) {
    i = images.length -1;
  }
  getImages();
  captions();
});



// HOVER EVENTS //

$('.row1').hover(function() {
  ($('.windows').css('opacity', '0.2'),
  $('.caption_windows, .tech_mob_windows').show()
)
},
 function() {
   $('.windows').css('opacity', '1'),
  $('.caption_windows, .tech_mob_windows').hide();
});

$('.row2').hover(function() {
  ($('.tribute').css('opacity', '0.2'),
  $('.caption_tribute, .tech_mob_tribute').show()
)
},
 function() {
   $('.tribute').css('opacity', '1'),
  $('.caption_tribute, .tech_mob_tribute').hide();
});

$('.row3').hover(function() {
  ($('.placeholder').css('opacity', '0.2'),
  $('.caption_placeholder, .tech_mob_placeholder').show()
)
},
 function() {
   $('.placeholder').css('opacity', '1'),
  $('.caption_placeholder, .tech_mob_placeholder').hide();
});



($(document).ready(function() {
  $('#about_page, #projects_page, .contact_page').hide()
}));


$('#about').click(function(event) {
  if ($('#title_page, #projects_page, .contact_page').is(':visible')) {
    $('#title_page, #projects_page, .contact_page').hide()
    $('#about_page').show()


  }

  else {
    $('#title_page').show()
    $('#about_page').hide()
    $('#').hide()


  };

});

$('#projects').click(function(event) {

  if ($('#title_page, #about_page, .contact_page').is(':visible')) {
    $('#title_page, #about_page, .contact_page').hide()
    $('#projects_page').show();
  }
  else {
    $('#title_page').show()
    $('#projects_page').hide();

  }
});

$('#contact').click(function(event) {
  if ($('#title_page, #projects_page, #about_page').is(':visible')) {
    $('#title_page, #projects_page, #about_page').hide()
    $('.contact_page').show()
  }
  else {
    $('#title_page').show()
    $('.contact_page').hide()

  };
});

$('.close').click(function(event) {
  $('#title_page').show()
  $('#about_page, #projects_page, .contact_page').hide()



});

})();
