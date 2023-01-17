var firstBox=document.getElementById("first");
var secondBox=document.getElementById("second");
var thirdBox=document.getElementById("third");

function firstBar(width){
    if(width>32)
    firstBox.style.left="150px";
    secondBox.style.left="2000px";
    thirdBox.style.left="3000px";
}


function secondBar(){
    firstBox.style.left="-2000px";
    secondBox.style.left="150px";
    thirdBox.style.left="2000px";
}



function thirdBar(){
    firstBox.style.left="-3000px";
    secondBox.style.left="-2000px";
    thirdBox.style.left="150px";
}