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

let c=document.getElementById("divid");
let chid="checkboxid";
let lbid="checkboxlabel";

function oncheckboxchange(){
lbl.classList.toggle("strike-through");

}
let checkboxinp=document.createElement("input");
checkboxinp.type="checkbox";
checkboxinp.id="chid";

checkboxinp.onclick=function()
{
    oncheckboxchange();
};
c.appendChild(checkboxinp);
let lbl=document.createElement("label");
lbl.style.fontFamily="Roboto";
lbl.style.marginLeft="5px";
lbl.setAttribute("for","chid");
lbl.id=lbl;
lbl.textContent="html";
c.appendChild(lbl);