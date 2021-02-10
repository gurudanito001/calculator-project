var calcScreen = document.getElementById("calc-screen");

//when window loads, focus pointer on the screen
window.onload(
    calcScreen.value = 0
)

function displayValue(num){
    // if the screen is showing "0"
    if(calcScreen.value === "0" && num !== "."){
        calcScreen.value = num;
        return;
    }
    /* if(num === "." && calcScreen.value.includes(".")){
        return;
    } */
    calcScreen.value += num
}   

function getResult(){
    document.getElementById("history").textContent = calcScreen.value;
    var result = eval(calcScreen.value);
    calcScreen.value = result;
}

function clearAll(){
    calcScreen.value = 0;
}
