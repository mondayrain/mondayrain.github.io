$( function() {
    var current_favourites = document.getElementById("current_favourites");
    var favourites_data = GLOBALS.readingListFavourites();
    GLOBALS.appendSection(favourites_data["title"], favourites_data["list"], current_favourites, false, "by");

    var current_year = document.getElementById("current_year");
    var current_year_data = GLOBALS.readingListCurrentYear();
    GLOBALS.appendSection(current_year_data["title"], current_year_data["list"], current_year, true, "by");

    var reading_lists_container = document.getElementById("reading_lists_container");
    var past_years = document.getElementById("past_years");
    var past_year_data = GLOBALS.readingListPastYears();
    for(var i = 0; i < past_year_data.length; i++) {
        var section = document.createElement("div");
        section.className = "list"
        var data = past_year_data[i];
        GLOBALS.appendSection(data["title"], data["list"], section, false, "by");
        reading_lists_container.appendChild(section);
    }
} );
