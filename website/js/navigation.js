/*! Main */
jQuery(document).ready(function($) {

    var navbar = $('#navbar-main'),
    		distance = navbar.offset().top,
        $window = $(window);

    // Switch between fixed and unfixed navbar on scroll
    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	$("body").css("padding-top", "100px");
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
        }
    })

    // Smooth scroll to section on navbar click
    $("#profilenavbutton").click(function() {
        $('#profile').ScrollTo();
    });

    $("#playnavbutton").click(function() {
        $('#play').ScrollTo();
    });

    $("#practicenavbutton").click(function() {
        $('#practice').ScrollTo();
    });

    $("#professionalnavbutton").click(function() {
        $('#professional').ScrollTo();
    });

});