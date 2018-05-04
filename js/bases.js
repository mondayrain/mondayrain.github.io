$( function() {
    var bases_list = document.getElementById("bases_list");

    // Append current
    var bolded = GLOBALS.getKey(GLOBALS.currentBase());
    var unbolded = ", " + GLOBALS.getValue(GLOBALS.currentBase());
    GLOBALS.appendElementToList(bolded, unbolded, bases_list, true);

    // Append rest of the bases
    var bases = GLOBALS.bases()
    for (var i = 1; i < bases.length; i++) {
        var base = bases[i];
        var bolded = GLOBALS.getKey(base);
        var unbolded = ", " + GLOBALS.getValue(base);
        GLOBALS.appendElementToList(bolded, unbolded, bases_list, false);
    }
} );
