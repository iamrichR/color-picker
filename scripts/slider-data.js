function getSliderVals(){

    let hueVals = {
        min: 0,
        max: 360,
        step: 1,
        value: 180
    };

    let satVals = {
        min: 0,
        max: 100,
        step: 1,
        value: 100
    };

    let lightVals = {
        min: 0,
        max: 100,
        step: 1,
        value: 50
    };

    let alphaVals = {
        min: 0.0,
        max: 1.0,
        step: 0.01,
        value: 1.0
    };


    return {
        hue: hueVals,
        sat: satVals,
        light: lightVals,
        alpha: alphaVals
    };

}


function getSliderGrads(key){
    let gradient = [];

    switch(key){
        case 'hue':
            let hueGrad = [];

            for(let i = 0; i <= 360; i += 40){
                hueGrad.push(`hsla(${i}, ${sliders.sat.value}%, ${sliders.light.value}%, ${sliders.alpha.value})`);
            }

            gradient = hueGrad;
            break;

        case 'sat':
            let satGrad = [`hsla(${sliders.hue.value}, 0%, ${sliders.light.value}%, ${sliders.alpha.value})`,
            `hsla(${sliders.hue.value}, 50%, ${sliders.light.value}%, ${sliders.alpha.value})`,
            `hsla(${sliders.hue.value}, 100%, ${sliders.light.value}%, ${sliders.alpha.value})`];

            gradient = satGrad;
            break;

        case 'light':
            let lightGrad = [`hsla(${sliders.hue.value}, ${sliders.sat.value}%, 0%, ${sliders.alpha.value})`,
            `hsla(${sliders.hue.value}, ${sliders.sat.value}%, 50%, ${sliders.alpha.value})`,
            `hsla(${sliders.hue.value}, ${sliders.sat.value}%, 100%, ${sliders.alpha.value})`];
            
            gradient = lightGrad;
            break;

        case 'alpha':
            let alphaGrad = [`hsla(${sliders.hue.value}, ${sliders.sat.value}%, ${sliders.light.value}%, 0.0)`,
            `hsla(${sliders.hue.value}, ${sliders.sat.value}%, ${sliders.light.value}%, 0.5)`,
            `hsla(${sliders.hue.value}, ${sliders.sat.value}%, ${sliders.light.value}%, 1.0)`];

            gradient = alphaGrad;
            break;

    }   

    if(gradient == []){
        console.log(`Something went wrong - returning empty gradient for key: ${key}`);
    }

    return gradient;
}
