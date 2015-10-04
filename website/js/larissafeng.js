$(document).ready(function() {

    // Scroll buttons
    $(".navbutton").click(function() {
        var scrollTo = $(this).attr('id');
        $('html, body').animate({
            scrollTop: $(scrollTo).offset().top
        }, 1000);
    });

    // Icon hovering
    $(".header-icon").hover(
        // On enter, change image to inversion
        function() {
            var url = $(this).attr("src");
            url = url.substring(0, url.length - 4);
            $(this).attr("src", url.concat("-hover.png")); 
        }, 
        // On exit, change back
        function() {
            var url = $(this).attr("src");
            $(this).attr("src", url.substring(0, url.length - "-hover.png".length).concat(".png"));
        });
});

