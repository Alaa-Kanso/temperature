let celc = document.getElementById('cel');
let ferh = document.getElementById('fer');


//cel to fer when you write the value in cel it will show in fer 
celc.oninput = () => {
    let output = (parseFloat(celc.value)*9)/5 +32;
    ferh.value = parseFloat(output.toFixed(2));
};

ferh.oninput = () => {
    let output = ((parseFloat(ferh.value) - 32)*5)/9;
    celc.value = parseFloat(output.toFixed(2));
};
