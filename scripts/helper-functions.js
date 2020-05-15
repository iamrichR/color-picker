function setupSliders(){
    let sliderVals = getSliderVals();

    let hue = {
        defaults: sliderVals.hue,
        element: document.getElementById('control-hue'),
        bg: document.getElementById('bg-hue'),
        value: 0,
    };

    let sat = {
        defaults: sliderVals.sat,
        element: document.getElementById('control-sat'),
        bg: document.getElementById('bg-sat'),
        value: 0
    };

    let light = {
        defaults: sliderVals.light,
        element: document.getElementById('control-light'),
        bg: document.getElementById('bg-light'),
        value: 0
    };

    let alpha = {
        defaults: sliderVals.alpha,
        element: document.getElementById('control-alpha'),
        bg: document.getElementById('bg-alpha'),
        value: 0
    };

    sliders = {
        hue: hue,
        sat: sat,
        light: light,
        alpha: alpha
    };

    Object.keys(sliders).forEach(e => {
        assignDefaults(sliders[e]);
    });

    return sliders;
}

function assignDefaults(slider){
    let element = slider.element;
    element.min = slider.defaults.min;
    element.max = slider.defaults.max;
    element.step = slider.defaults.step;
    slider.value = slider.defaults.value;
    slider.element.value = slider.value;

    element.addEventListener('input', sliderOnInput);
}

function sliderOnInput(){
    let toUpdate = [];

    Object.keys(sliders).forEach(e => {
        let slider = sliders[e];
        if(slider.element === this){
            slider.value = this.value;
        }
    });

    updateSampleBg();
    updateAllSliderBgs();
}

function updateSampleBg(){
    let newColor = `hsla(${sliders.hue.value}, ${sliders.sat.value}%, ${sliders.light.value}%, ${sliders.alpha.value})`;
    document.getElementById('color-sample').style.backgroundColor = newColor;
    updateColorCodes(newColor);
}

function getNewSliderBg(key){
    return `hsla(${sliders.hue.value}, ${sliders.sat.value}%, ${sliders.light.value}%, ${sliders.alpha.value})`;
}

function updateAllSliderBgs(){
    Object.keys(sliders).forEach(e => {
        updateSliderBg(e);
    });
}

function updateSliderBg(key){
    let gradStr = "linear-gradient(to right, ";

    let gradient = getSliderGrads(key);

    gradient.forEach(grad => {
        gradStr += (grad + ",");
    });

    //removing the last extraneous comma
    gradStr = gradStr.slice(0, -1);
    gradStr += ")";

    sliders[key].bg.style.background = gradStr;
}

function updateColorCodes(hsla_code){
    document.getElementById('hsla-code').innerHTML = hsla_code;
    let rgba_code = parseRGB(document.getElementById('color-sample').style.backgroundColor);
    document.getElementById('rgba-code').innerHTML = rgba_code;
    let hex_code = rgba_to_hex(rgba_code);
    document.getElementById('hex-code').innerHTML = hex_code;
}

function parseRGB(code){
    //if rgb, convert to rgba
    let code_type = code.slice(0,4).toLowerCase();
    if(code_type == 'rgba'){
        return code;
    } else if(code_type == 'rgb('){
        return code.replace('rgb', 'rgba').replace(')',', 1.0)');
    } else{
        console.log("Error in ParseRBG - Generated code not in RGB/RGBA format");
        console.log(`function input:  "${code}"`);
        return -1;
    }
}

function rgba_to_hex(rgba_code){
    let hex_code = "#";
    
    let startIdx = rgba_code.indexOf('(')+1;
    let endIdx = rgba_code.indexOf(',');
    let red = parseInt(rgba_code.slice(startIdx, endIdx)).toString(16);
    if(red.length == 1){ red += '0'};
    
    startIdx = endIdx+1
    endIdx = rgba_code.indexOf(',', startIdx);

    let green = parseInt(rgba_code.slice(startIdx, endIdx)).toString(16);
    if(green.length == 1){ green += '0'};

    startIdx = endIdx+1
    endIdx = rgba_code.indexOf(',', startIdx);

    let blue = parseInt(rgba_code.slice(startIdx, endIdx)).toString(16);
    if(blue.length == 1){ blue += '0'};

    startIdx = endIdx+1
    endIdx = rgba_code.indexOf(')');

    let alpha = parseInt(parseFloat(rgba_code.slice(startIdx, endIdx))*255).toString(16);
    if(alpha.length == 1){ alpha += '0'};
    if(alpha.toLowerCase() == 'ff'){ alpha = ''};

    hex_code = `#${red}${green}${blue}${alpha}`;

    return hex_code
}