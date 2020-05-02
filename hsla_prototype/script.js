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
        updateLightBg();
        console.log(`hue: ${hue}`);
    };
    
    satSlider.onchange = function(){
        sat = satSlider.value;
        updateLightBg();
        updateHueBg();
        console.log(`sat: ${sat}`);
    };

    lightSlider.onchange = function(){
        light = lightSlider.value;
        updateSatBg();
        updateHueBg();
        console.log(`light: ${light}`);
    };

    updateHueBg();
    updateSatBg();
    updateLightBg();
}

function updateHueBg(){
    let arrSize = 10;
    let colorStops = [];
    for(let i = 0; i < arrSize; i++){
        let hueScaled = i*36;
        colorStops.push(`hsla(${hueScaled},${sat}%,${light}%,1.0)`);
    }

    //adding a final red endpoint because of how the scaling worked out
    colorStops.push(`hsla(360,${sat}%,${light}%,1.0)`);
    let canvas = document.getElementById('hue-slider-bg');
    applyGradient(colorStops, canvas);
}

function updateSatBg(){
    let lowSatStr = `hsla(${hue},0%,${light}%,1.0)`;
    let highSatStr = `hsla(${hue},100%,${light}%,1.0)`;

    let canvas = document.getElementById('sat-slider-bg');
    let colorStops = [lowSatStr, highSatStr];
    
    applyGradient(colorStops, canvas);
}

function updateLightBg(){
    let lowLightStr = `hsla(${hue},${sat}%,0%,1.0)`;
    let midLightStr = `hsla(${hue},${sat}%,50%,1.0)`;
    let highLightStr = `hsla(${hue},${sat}%,100%,1.0)`;

    let canvas = document.getElementById('light-slider-bg');
    let colorStops = [lowLightStr, midLightStr, highLightStr];
    
    applyGradient(colorStops, canvas);
}

function applyGradient(colorStops, canvas){
    let ctx = canvas.getContext('2d');
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    colorStops.forEach((colorStop, index) => {
        //scale indexes to fit on a {0.0 -> 1.0} scale
        let scaledIndex = index/(colorStops.length - 1);
        gradient.addColorStop(scaledIndex, colorStop);
    });
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}