const txtn1= document.getElementById("n1")
const txtn2= document.getElementById("n2")
const respuesta= document.getElementById("resp")
const btncalcular= document.getElementById("calcular")
btncalcular.addEventListener('click',calcular)

//----------Arrays
const respuesta2 = document.getElementById("resp2")
const btnejecutar = document.getElementById("ejecuta")
btnejecutar.addEventListener('click', ejecutar);

//------
function calcular(){
    const op1=parseFloat(txtn1.value)
    const op2=parseFloat(txtn2.value)
    let resp= op1+op2
    respuesta.innerText = resp
    respuesta.style = "color:red"
}

//-----Arrays
let frutas = ['manzana', 'pera'];

function ejecutar(){
    frutas.forEach(function(item,index,array){
        respuesta2.innerText = array;   
    });
}

//-----Recorrer json

async function obtenerData(){
    await fetch("http://127.0.0.1:5500/data.json")
    // const json = await response.text();
    // console.log(JSON.parse(json))
    .then(response=>response.json())
    .then(json=> console.log(json))
    .catch(error=> console.log('Solicitud fallida', error))
}

obtenerData();