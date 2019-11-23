const kaprekar_const = 6174;
    
function stringToList(w){     
    let list = [];
    for(let i=0; i < w.length;i++){
        list.push(w[i])   
    }
    return list; 
}

function intoNumberList(l){
    for(let i=0; i<l.length; i++){
        l[i] = parseInt(l[i])
    }return l;    
}

function decreasingOrder(l){
    for(let i = 0; i < l.length; i++){ 
        for(let j = i+1; j < l.length; j++){  
            if(l[i] < l[j]){  
                temp = l[i];
                l[i] = l[j];
                l[j] = temp;
            }
        }
    } return l;    
}

function increasingOrder(l){
    for(let i = 0; i < l.length; i++){ 
        for(let j = i+1; j < l.length; j++){  
            if(l[i] > l[j]){  
                temp = l[i];
                l[i] = l[j];
                l[j] = temp;
            }
        }
    } return l;
}

function numberListToString(l){
    let string = "";
    for(let i=0; i<l.length; i++){
        string += l[i];
    }
    return string;
}

function stringToInt(s){
    let num = parseInt(s);
    return num;
}

function sameDigitsCheck(s){
    let same = false;
    let l = stringToList(s);
        if(l[0]==l[1] && l[0]==l[2] && l[0]==l[3]){
            same = true;
        }
    return same;
}

function operationsNumber(s){
    let result;
    let iteration_number = 0
    let string = s;
    if(sameDigitsCheck(s)){
        return "Has introducido un número de cuatro digitos iguales! Vuelve a introducir otro número.";
    }
    if(s.length != 4){
        return "El número introducido tiene que tener cuatro digitos! Vuelve a introducir otro número.";
    }
    while(result!=kaprekar_const){
        iteration_number++;
        let highestNum = stringToInt(numberListToString(decreasingOrder(intoNumberList(stringToList(string)))));
        let smallestNum = stringToInt(numberListToString(increasingOrder(intoNumberList(stringToList(string)))));
        result = highestNum-smallestNum;
        agregarElemento((highestNum + ' - ' + smallestNum + ' = ' + result), "li", "rutinas");
        string = result.toString();
        if(string.length==3){
            string = "0" + string;
            console.log("Adding zero at the beginning:")
        }
        if(iteration_number > 20){
            return "El algoritmo ha sido parado! Ha superado " + iteration_number + " iteraciones!";
        }
    }
    return iteration_number;
}

function agregarElemento(dato, elemento, id){
    var node = document.createElement(elemento);
    var textnode = document.createTextNode(dato);
    node.appendChild(textnode);
    document.getElementById(id).appendChild(node);
}

let cal = document.getElementById('calculate');

cal.onclick = function(){

    let str = document.getElementById('numero').value;
    let output = operationsNumber(str);
    if(typeof(output)=="string"){
        let exep = document.getElementById('exception').innerHTML += output;
    }else{
        let res = document.getElementById('result').innerHTML += output;
    }
}

function myFunction(){
    document.getElementById("myForm").reset();
    let res = document.getElementById('result').innerHTML = "Número de rutinas: ";
    let exep = document.getElementById('exception').innerHTML = "";
    let rut = document.getElementById('rutinas').innerHTML = "";
}