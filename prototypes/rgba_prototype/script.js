var canvas;
var ctx;

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function updateCanvas(){
    let rVal = document.getElementById("rVal").value;
    let gVal = document.getElementById("gVal").value;
    let bVal = document.getElementById("bVal").value;
    let aVal = document.getElementById("aVal").value/100;

    let rgbaStr = `rgba(${rVal}, ${gVal}, ${bVal}, ${aVal})`

    document.getElementById("rgba-code-display").value = rgbaStr;

    ctx.fillStyle = rgbaStr;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
}