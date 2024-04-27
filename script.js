let lamp = document.getElementById('lamp');

function quebrada(){
    return lamp.src.indexOf('quebrada') > -1
}


function acende() {
    if (!quebrada()){
        lamp.src = './img/acesa.jpg';
    }
}  

function apaga() {
    if (!quebrada()){
        lamp.src = './img/apagada.jpg';
    }
}  

function quebrar(){
    if (!quebrada()){
        lamp.src="./img/quebrada.jpg";
    }
}

function trocar(){
    if (quebrada()){
        lamp.src = './img/apagada.jpg';
    }
}
