function onincrement(){
    let a=document.getElementById("s1");
    let b=a.textContent;
    let c=parseInt(b)+1;
    if (c>0){
        a.style.color="green";
    }
    else if (c<0){
        a.style.color="red";
    }
   
else{

    a.style.color="black";
} a.textContent = c;
}

function ondecrement(){
    let a=document.getElementById("s1");
    let b=a.textContent;
    let c=parseInt(b)-1;
    if (c>0){
        a.style.color="green";
    }
    else if (c<0){
        a.style.color="red";
    }
   
else{
    a.style.color="black";
} a.textContent = c;


}
function onReset(){
    let a=document.getElementById("s1");
    let counterValue=0;
    a.textContent=counterValue;
    a.style.color="black";
}
