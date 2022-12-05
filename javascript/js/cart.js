let a=document.getElementById("inpid");
let b=document.getElementById("ulid");

function cart(){
    let items=a.value;
    let li=document.createElement("li");
    li.textContent=items;
   li.style.listStyle="none";
    a.value="";
    ulid.appendChild(li);
    
}
function del(){
    let rem=document.getElementById("ulid");
    rem.removeChild(rem.firstElementChild);
}