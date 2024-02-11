window.onload = initAll;

var usedNum = new Array(76);
function initAll() {
    document.getElementById("bingoCreate").onclick = clearAll;
    bingoCreate();
}
function bingoCreate() {
    for(var i = 0; i < 24; i++) {
        setSquare(i);
    }
}
function setSquare(squareNum) {
    var Basis = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4);
    var newNum;
    
    do {
        newNum = Basis[squareNum] * 15 + Math.floor(Math.random() * 15) + 1;
    }
    while(usedNum[newNum]);

    usedNum[newNum] = true;
    document.getElementById("square" + squareNum).innerHTML = newNum;
    document.getElementById("square" + squareNum).className = ""; 
    document.getElementById("square" + squareNum).onmousedown = toggleColor; 
}
function clearAll() {
    for (var i=1; i<usedNum.length; i++) { 
        usedNum[i] = false; 
    } 
 
    bingoCreate();
    return false;
}
function toggleColor(evt) { 
    var thisSquare = evt.target; 
    if (thisSquare.className == "") { 
       thisSquare.className = "pickedBG"; 
    }
    else { 
       thisSquare.className = ""; 
    }
}