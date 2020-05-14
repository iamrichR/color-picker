var hue;
var sat;
var light;
var alpha;
var sliders;

window.onload = function(){
    setupSliders();

    sliders = [hue, sat, light, alpha];

    sliders.forEach(e => {
        assignDefaults(e);
    });

    updateSampleBg();

    /*hue.element.oninput = function(){
        hue.value = hue.element.value;
        // updateSatBg();
        // updateLightBg();
        // updateAlphaBg();
        console.log(`hue: ${hue.value}`);
    };*/

};
