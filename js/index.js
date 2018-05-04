$( function() {
    $( '#type-text' ).teletype( {
        text: [ 'software developer', 'devops engineer', 'pythonista', 'Linux enthusiast'],
        typeDelay: 0,
        backDelay: 4
    } );

    document.getElementById("landing_based_in").innerHTML=GLOBALS.getKey(GLOBALS.currentBase());
    document.getElementById("landing_reading_title").innerHTML=GLOBALS.currentBookName();
    document.getElementById("landing_reading_author").innerHTML=GLOBALS.currentBookAuthor();
} );
