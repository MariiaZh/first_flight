let btn = document.querySelector("input");
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;


let leftObj = {
    pageValue: pageWidth,
    points: 200,
    str: "left"
};

let topObj = {
    pageValue: pageHeight,
    points: 40,
    str: "top"
};


window.onload = function () {

    btn.addEventListener("mouseover", runAway);

};

function runAway() {

    let coordLeft = parseInt(document.defaultView.getComputedStyle(btn).left);
    let coordTop = parseInt(document.defaultView.getComputedStyle(btn).top);

    changeCoordValue(coordLeft, leftObj);
    changeCoordValue(coordTop, topObj);

}


function changeCoordValue(elemCoord, obj) {

    let randomizer = Math.round(Math.random() * (9) + 1);

    if (elemCoord >= obj.points && elemCoord <= obj.pageValue - 2 * obj.points) {
        if (randomizer % 2 == 0) {
            btn.style[obj.str] = elemCoord - obj.points + "px";
        } else {
            btn.style[obj.str] = elemCoord + obj.points + "px";
        }
    } else if (elemCoord < obj.points) {
        btn.style[obj.str] = elemCoord + obj.points + "px";
    } else if (elemCoord > obj.pageValue - 2 * obj.points) {
        btn.style[obj.str] = elemCoord - obj.points + "px";
    }

}