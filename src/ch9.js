$(document).ready(function() {
    /*
    car and cat
    pop and prop
    ferret, ferry, and ferrari
    Any word ending in ious
    A whitespace character followed by a dot, comma, colon, or semicolon
    A word longer than six letters
    A word without the letter e
    */

    'use strict';

    verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

    verify(/pr?op/, ["pop culture", "mad props"], ["plop"]);

    verify(/ferr[eya]/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);

    verify(/ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);

    verify(/\s[;:,\.]/, ["bad punctuation ."], ["escape the dot"]);

    verify(/\w{7,}/, ["hottentottententen"], ["no", "hotten totten tenten"]);

    verify(/\b[^e\s]+\b/, ["red platypus", "wobbling nest"], ["earth bed", "learning ape"]);

    function verify(regexp, yes, no) {
        // Ignore unfinished exercises
        if (regexp.source == "...") return;
        yes.forEach(function(s) {
            if (!regexp.test(s))
                console.log("Failure to match '" + s + "'");
        });
        no.forEach(function(s) {
            if (regexp.test(s))
                console.log("Unexpected match for '" + s + "'");
        });
    }

    var text = "'I'm the cook,' he said, 'it's my job.'";
    // Change this call.
    console.log(text.replace(/\B'/g, '"'));
    // → "I'm the cook," he said, "it's my job."



    // Fill in this regular expression.
    var number = /^\+\d+$|^\d+$|^-\d+$|^\d+\.\d*$|^\.\d+$|^\d+\.{1}\d+e\d$|^\d+e[+-]?\d+$/i;

    // Tests:
    ["1", "-1", "1.55", "+15", ".5", "5.", "1.3e2", "1E-4",
        "1e+12"
    ].forEach(function(s) {
        if (!number.exec(s)) {
            console.log("Failed to match '" + s + "'");
        }
    });
    ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
        "."
    ].forEach(function(s) {
        if (number.test(s))
            console.log("Incorrectly accepted '" + s + "'");
    });
});
