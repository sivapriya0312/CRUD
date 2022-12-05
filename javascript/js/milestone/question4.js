let inp1=document.getElementById("inp1");
let a=document.getElementById("diff");
let ans=document.getElementById("ans");
function diff(){
    let b=inp1.value-19;
    a.textContent="Difference:"+b;
    if(a>19){
        ans.textContent=a*a*a;
    }
    else{
        ans.textContent="Number is less than 19";
    }
}