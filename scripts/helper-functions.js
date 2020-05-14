function setupSliders(){
    let hue = {
        defaults: sliderVals.hue,
        element: document.getElementById('control-hue'),
        bg: document.getElementById('bg-hue'),
        value: 0
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

    Object.keys(sliders).forEach(e => {
        sliders[e].bg.style.backgroundColor = getNewSliderBg(e);
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

        updateSampleBg();
        sliders[e].bg.style.backgroundColor = getNewSliderBg(e);
    });
}

function updateSampleBg(){
    let newColor = `hsla(${sliders.hue.value}, ${sliders.sat.value}%, ${sliders.light.value}%, ${sliders.alpha.value})`;
    document.getElementById('color-sample').style.backgroundColor = newColor;
}

function getNewSliderBg(key){
    // let hueVal = sliders.hue.value;
    // let satVal = sliders.sat.value;
    // let lightVal = sliders.light.value;
    // let alphaVal = sliders.alpha.value;

    // switch(e){
    //     case "hue":
            
    //         break;
    //     case "sat":

    //         break;
    //     case "light":

    //         break;
    //     case "alpha":

    //         break;
    // }

    let newColor = `hsla(${sliders.hue.value}, ${sliders.sat.value}%, ${sliders.light.value}%, ${sliders.alpha.value})`;

    return newColor;
}

