/*jshint esversion: 6 */
//let msRealm = continuum.createRealm();

$("#result").hide();

$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 500);
});

function generateARandomThing() {
    return "You are an apple.";
}

$("#btnGo").click(function () {
    $("#result").show();
    let randomThing = generateARandomThing();
    $("#resVal").html(randomThing);
});