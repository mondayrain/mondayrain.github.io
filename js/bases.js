"use strict";

$( function() {
    let bases_list = document.getElementById("bases_list");

    // Append current
    let bolded = GLOBALS.getKey(GLOBALS.currentBase());
    let unbolded = `, ${GLOBALS.getValue(GLOBALS.currentBase())}`;
    GLOBALS.appendElementToList(bolded, unbolded, bases_list, true);

    // Append rest of the bases
    let bases = GLOBALS.bases()
    for (let i = 1; i < bases.length; i++) {
        let base = bases[i];
        bolded = GLOBALS.getKey(base);
        unbolded = `, ${GLOBALS.getValue(base)}`;
        GLOBALS.appendElementToList(bolded, unbolded, bases_list, false);
    }
} );
