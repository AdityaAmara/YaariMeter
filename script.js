document.getElementById("fill-btn-1").addEventListener("click",function(){
    let box1 = document.querySelector(".box1");
    let val1 = getComputedStyle(box1);
    let val = val1.height;
    valtrim = val.substring(0,val.length - 1);
    num = parseInt(val) + 50;
    finalstr = num + 'px';
    document.querySelector(".box1").style.height = finalstr;
});

document.getElementById("fill-btn-2").addEventListener("click",function(){
    let box2 = document.querySelector(".box2");
    let val2 = getComputedStyle(box2);
    let val3 = val2.height;
    valtrim1 = val3.substring(0,val3.length - 1);
    num2 = parseInt(val3) + 50;
    finalstr2 = num2 + 'px';
    document.querySelector(".box2").style.height = finalstr2;
});

document.getElementById("rst-btn-1").addEventListener("click",function(){
    document.querySelector(".box1").style.height = '0px';
});

document.getElementById("rst-btn-2").addEventListener("click",function(){
    document.querySelector(".box2").style.height = '0px';
});