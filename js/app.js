/*jshint esversion: 6 */
//let msRealm = continuum.createRealm();

$("#result").hide();

$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 500);
});

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
};

function generateARandomThing() {
    return [setA.randomElement(), setB.randomElement(), setC.randomElement(), setD.randomElement()].join(" ");
}

$("#btnGo").click(function () {
    $("#result").show();
    let randomThing = generateARandomThing();
    $("#resVal").html(randomThing);
});