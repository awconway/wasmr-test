import { WebR } from '@r-wasm/webr';
const webR = new WebR();

(async () => {
    await webR.init();

    let result = await webR.evalR('rnorm(10,5,1)');
    let output = await result.toArray();
    
    console.log('Result of running `rnorm` from webR: ', output);

})();

