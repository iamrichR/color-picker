function setupSliders(){
    let hue = {
        defaults: sliderVals.hue,
        element: document.getElementById('control-hue'),
        value: 0
    };

    let sat = {
        defaults: sliderVals.sat,
        element: document.getElementById('control-sat'),
        value: 0
    };

    let light = {
        defaults: sliderVals.light,
        element: document.getElementById('control-light'),
        value: 0
    };

    let alpha = {
        defaults: sliderVals.alpha,
        element: document.getElementById('control-alpha'),
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

//TODO - refactor?
function sliderOnInput(){
    Object.keys(sliders).forEach(e => {
        let slider = sliders[e];
        if(slider.element === this){
            slider.value = this.value;
        } else{
            //updateSliderBG(e);
        }
        updateSampleBg();
    });
}

function updateSampleBg(){
    let newColor = `hsla(${sliders.hue.value}, ${sliders.sat.value}%, ${sliders.light.value}%, ${sliders.alpha.value})`;
    console.log(newColor);
    document.getElementById('color-sample').style.backgroundColor = newColor;
}