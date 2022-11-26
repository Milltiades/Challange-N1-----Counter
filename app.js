let Btn1 = document.getElementById('btn-1');
let P2 = document.getElementById('p-2');
let Btn3 = document.getElementById('btn-3');
let Btn4 = document.getElementById('btn-4');


Btn1.addEventListener('click', btn1click);
Btn3.addEventListener('click', btn3click);
Btn4.addEventListener('click', btn4click);



function btn1click(){
    return gamoakeli()
    
}
function btn3click(){
    return miumate()
    
    
    
    
}
function btn4click(){
    return resetIt();
    
}

function miumate(){
    return P2.value++
}
function gamoakeli(){
    if( P2.value == '0'){
        P2.value = 0
    }else{
        P2.value--
    }
}
function resetIt(){
    P2.value = 0
}
