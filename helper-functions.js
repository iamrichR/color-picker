function setupSliders(){
    hue = {
        defaults: sliderVals.hue,
        element: document.getElementById('control-hue'),
        value: 0
    };

    sat = {
        defaults: sliderVals.sat,
        element: document.getElementById('control-sat'),
        value: 0
    };

    light = {
        defaults: sliderVals.light,
        element: document.getElementById('control-light'),
        value: 0
    };

    alpha = {
        defaults: sliderVals.alpha,
        element: document.getElementById('control-alpha'),
        value: 0
    };
}

function assignDefaults(slider){
    let element = slider.element;
    element.min = slider.defaults.min
    element.max = slider.defaults.max
    element.step = slider.defaults.step
    element.value = slider.defaults.value

    // element.onInput = function(){
    //     slider.value = slider.element.value;
    //     console.log(`${e.element.id}:  ${e.value}`);
    // };

    element.addEventListener('input', sliderOnInput);
}

//TODO
//yeah okay, a foreach on every input is bad, I'll refactor this later
function sliderOnInput(){
    sliders.forEach(e => {
        if(e.element === this){
            e.value = this.value;
            //console.log(e.value);
        } else{
            //updateSliderBG(e);
        }
        updateSampleBg();
    });
}

function updateSampleBg(){
    let newColor = `hsla(${sliders[0].value}, ${sliders[1].value}%, ${sliders[2].value}%, ${sliders[3].value});`;
    console.log(newColor);
    document.getElementById('color-sample').style.backgroundColor = newColor;
}