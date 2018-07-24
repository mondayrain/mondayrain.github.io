"use strict";

$( function() {
    let current_year = document.getElementById("current_year");
    let current_year_data = GLOBALS.readingListCurrentYear();
    GLOBALS.appendSection(current_year_data["title"], current_year_data["list"], current_year, true, "by");

    let reading_lists_container = document.getElementById("reading_lists_container");
    let past_years = document.getElementById("past_years");
    let past_year_data = GLOBALS.readingListPastYears();
    for(var i = 0; i < past_year_data.length; i++) {
        var section = document.createElement("div");
        section.className = "list"
        var data = past_year_data[i];
        GLOBALS.appendSection(data["title"], data["list"], section, false, "by");
        reading_lists_container.appendChild(section);
    }
} );
