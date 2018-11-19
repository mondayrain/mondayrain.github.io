"use strict";

var GLOBALS = {};

$( function() {

    GLOBALS.DELIMITER = ',';
    GLOBALS.DATA = {
        "current_year": "2018",
        "reading_list": {
            "current_year": {
                "title": "2018",
                "list": [
                    "The Little Buddhist, César Aira",
                    "Ema the Captive, César Aira",
                    "Powerful, Patty McCord",
                    "Crucial Conversations, Kerry Patterson et. al",
                    "Hills Like White Elephants, Ernest Hemingway",
                    "A Very Old Man with Enormous Wings, Gabriel Garcia Márquez",
                    "When Breath Becomes Air, Paul Kalanithi",
                    "The Reader, Bernhard Schlink",
                    "Zeitoun, Dave Eggers",
                    "The Value of Nothing, Raj Patel",
                    "The End of Growth, Jeff Rubin",
                    "Nickel and Dimed: On (Not) Getting By In America, Barbara Ehrenreich",
                    "Disgrace, J.M. Coetzee",
                    "All the Light We Cannot See, Anthony Doerr",
                    "An Artist of the Floating World, Kazuo Ishiguro",
                    "The Buried Giant, Kazuo Ishiguro",
                    "A Short History of Southeast Asia, Peter Church",
                    "Call Me By Your Name, André Aciman",
                    "The Underground Railway, Colson Whitehead",
                    "Marcovaldo, Italo Calvino",
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
                        "Autobiography of Red, Anne Carson",
                        "Crime and Punishment, Fyodor Dostoyevsky",
                        "Fight Club, Chuck Palahniuk",
                    ],
                },
            ],
        },
        "bases": [
            "Toronto, Canada",
            "Vancouver, Canada",
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
        let header = document.createElement("h4");
        let bolded_element = document.createElement("b");
        bolded_element.innerHTML = bolded;
        let unbolded_element = document.createTextNode(unbolded);

        header.appendChild(bolded_element);
        header.appendChild(unbolded_element);

        if(isCurrent) {
            let small = document.createElement("small");
            small.innerHTML = " (current)";
            header.appendChild(small);
        }

        parentElement.append(header);
    };

    GLOBALS.appendSection = function(header, list, parent_element, firstIsCurrent, delimiter) {
        let title = document.createElement("h3");
        title.innerHTML = header;
        parent_element.appendChild(title);

        let startingIndex = 0;
        let current = "";
        let bolded = "";
        let unbolded = "";
        if(firstIsCurrent) {
            current = list[0];
            bolded = GLOBALS.getKey(current);
            unbolded = ` ${delimiter} ${GLOBALS.getValue(current)}`;
            GLOBALS.appendElementToList(bolded, unbolded, parent_element, true);
            startingIndex = 1;
        }

        for(var i = startingIndex; i < list.length; i++) {
            bolded = GLOBALS.getKey(list[i]);
            unbolded = ` ${delimiter} ${GLOBALS.getValue(list[i])}`;
            GLOBALS.appendElementToList(bolded, unbolded, parent_element, false);
        }
    }
} );
