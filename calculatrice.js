function afficher(valeur){

     document.getElementById('display').value +=valeur;

}
function calculer() {
    let expretion = document.getElementById('display').value
    let result = eval(expretion);
    document.getElementById('display').value = result;
}

function annulation(){
    document.getElementById('display').value ="";

}

function suppression(){
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1)  ;
}

function modulo(){
    document.getElementById('display').value += '%' ;
}

function puissance(){
    let nb = document.getElementById('display').value;
    document.getElementById('display').value = "";
    document.getElementById('display').value += `Math.pow(${nb},2)`;
}

function exponen(){
    let nbr = document.getElementById('display').value;
    document.getElementById('display').value = "";
    document.getElementById('display').value += `Math.exp(${nbr},2)`;
}

function logarithme(){
    let nbr = document.getElementById('display').value;
    document.getElementById('display').value = "";
    document.getElementById('display').value += `Math.log10(${nbr})`;
}

function racine(){
    let nbr = document.getElementById('display').value;
    document.getElementById('display').value = "";
    document.getElementById('display').value += `Math.sqrt(${nbr})`;
}