/* ALL JS FUNCTIONALITY FOR MAIN SITE */

$( function() {
    $( '#type-text' ).teletype( {
        text: [ 'software developer', 'pythonista', 'Linux enthusiast',
                'OSS contributor', 'hackathon junkie', 'proud Vancouverite'],
        typeDelay: 0,
        backDelay: 8
    } );
} );