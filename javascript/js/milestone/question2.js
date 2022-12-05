function random(){
let a=document.getElementById("t1");
let b=document.getElementById("p1");
if(a.value>=1 && a.value<=10){
    b.textContent="Good work";
}
else{
    b.textContent="Not matched";
}
}