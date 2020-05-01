var hue;
var hueSlider
var sat;
var satSlider
var light;
var lightSlider;

window.onload = function(){
    hueSlider = document.getElementById('hue-slider');
    satSlider = document.getElementById('sat-slider');
    lightSlider = document.getElementById('light-slider');

    hue = hueSlider.value;
    sat = satSlider.value;
    light = lightSlider.value;

    hueSlider.onchange = function(){
        hue = hueSlider.value;
        updateSatBg();
        console.log(`hue: ${hue}`);
    };
    
    satSlider.onchange = function(){
        sat = satSlider.value;
        console.log(`sat: ${sat}`);
    };

    lightSlider.onchange = function(){
        light = lightSlider.value;
        updateSatBg();
        console.log(`light: ${light}`);
    };


    updateSatBg();
}

function updateSatBg(){
    console.log(`linear-gradient(to right, hsla(${hue},0%,${light}%,1.0), hsla(${hue},100%,${light}%,1.0));`);
    document.getElementById("sat-slider-bg").style.background = `linear-gradient(to right, hsla(${hue},0%,${light}%,1.0), hsla(${hue},100%,${light}%,1.0));`;
}