var GLOBALS = {};

$( function() {

    GLOBALS.DELIMITER = ',';
    GLOBALS.DATA = {
        "current_year": "2018",
        "reading_list": {
            "current_favourites":   {
                "title": "Recommended",
                "list": [
                    "Autobiography of Red, Anne Carson",
                    "Homegoing, Yaa Gyasi",
                    "What We Talk About When We Talk About Love, Raymond Carver",
                ],
            },
            "current_year": {
                "title": "2018",
                "list": [
                    "A Superior Man, Paul Yee",
                    "If on a Winter's Night a Traveler, Italo Calvino",
                    "The Martian, Andy Weir",
                    "Homegoing, Yaa Gyasi",
                    "Mother Night, Kurt Vonnegut",
                    "A Visit from the Goon Squad, Jennifer Egan",
                ],
            },
            "past_years": [
                {
                    "title": "2017",
                    "list": [
                        "Shantytown, César Aira",
                        "The Girl with All the Gifts, M.R. Carey",
                        "Armageddon in Retrospect, Kurt Vonnegut",
                        "Doing Good Better, William MacAskill",
                        "Release It! Design and Deploy Production-Ready Software, Michael T. Nygard",
                        "Wenjack, Joseph Boyden",
                        "Alcatraz From Inside, Jim Quillen",
                        "Assignment Alcatraz, Patrick Mahoney",
                        "What We Talk About When We Talk About Love, Raymond Carver",
                        "Mastery, George Leonard",
                        "The Sirens of Titan, Kurt Vonnegut",
                        "Slaughterhouse-Five, Kurt Vonnegut",
                    ]
                },
                {
                    "title": "2016",
                    "list": [
                        "The Snowden Files, Luke Harding",
                        "The Trial and Death of Socrates, Plato",
                        "Fahrenheit 451, Ray Bradbury",
                    ],
                },
                {
                    "title": "Misc / Shoutouts",
                    "list": [
                        "Fight Club, Chuck Palahniuk",
                        "The Trial and Death of Socrates, Plato",
                        "Crime and Punishment, Fyodor Dostoyevsky",
                        "Fahrenheit 451, Ray Bradbury",
                        "Blindness, José Saramago",
                    ],
                },
            ],
        },
        "bases": [
            "Vancouver, Canada",
            "Toronto, Canada",
            "San Francisco Bay Area, USA",
            "Ottawa, Canada",
            "Klagenfurt, Austria",
        ]
    };


    // Since JSON is unordered, we have a list of key/value strings
    // delimited by DELIMITER.
    GLOBALS.getKey = function (arg) {
        return arg.split(GLOBALS.DELIMITER)[0];
    };

    GLOBALS.getValue = function (arg) {
        return arg.split(GLOBALS.DELIMITER)[1];
    };

    GLOBALS.readingListFavourites = function() {
        return GLOBALS.DATA["reading_list"]["current_favourites"];
    };

    GLOBALS.readingListCurrentYear = function() {
        return GLOBALS.DATA["reading_list"]["current_year"];
    };

    GLOBALS.readingListPastYears = function() {
        return GLOBALS.DATA["reading_list"]["past_years"];
    };

    GLOBALS.currentBookName = function() {
        return GLOBALS.getKey(GLOBALS.readingListCurrentYear()["list"][0]);
    };

    GLOBALS.currentBookAuthor = function() {
        return GLOBALS.getValue(GLOBALS.readingListCurrentYear()["list"][0]);
    };

    GLOBALS.currentBase = function() {
        return GLOBALS.DATA["bases"][0];
    };

    GLOBALS.bases = function() {
        return GLOBALS.DATA["bases"];
    };

    GLOBALS.appendElementToList = function(bolded, unbolded, parentElement, isCurrent) {
        console.log("hello");
        header = document.createElement("h4");
        bolded_element = document.createElement("b");
        bolded_element.innerHTML = bolded;
        unbolded_element = document.createTextNode(unbolded);

        header.appendChild(bolded_element);
        header.appendChild(unbolded_element);

        if(isCurrent) {
            small = document.createElement("small");
            small.innerHTML = " (current)";
            header.appendChild(small);
        }

        parentElement.append(header);
    };

    GLOBALS.appendSection = function(header, list, parent_element, firstIsCurrent, delimiter) {
        var title = document.createElement("h2");
        title.innerHTML = header;
        parent_element.appendChild(title);

        var startingIndex = 0;
        var current = "";
        var bolded = "";
        var unbolded = "";
        if(firstIsCurrent) {
            current = list[0];
            bolded = GLOBALS.getKey(current);
            unbolded = " " + delimiter + " " + GLOBALS.getValue(current);
            GLOBALS.appendElementToList(bolded, unbolded, parent_element, true);
            startingIndex = 1;
        }

        for(var i = startingIndex; i < list.length; i++) {
            bolded = GLOBALS.getKey(list[i]);
            unbolded = " " + delimiter + " " + GLOBALS.getValue(list[i]);
            GLOBALS.appendElementToList(bolded, unbolded, parent_element, false);
        }
    }
} );
