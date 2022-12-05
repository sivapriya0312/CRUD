/*let a=document.getElementById("divid");
a.classList.add("text-center","p-5");
let b=document.createElement("input");
b.type="checkbox";
b.id="inpid";
a.appendChild(b);

let lb=document.createElement("label");
lb.setAttribute("for","checkbox");
lb.textContent="I am a label";
lb.id="labelid";
a.appendChild(lb);*/
let a=document.getElementById("divid");
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
a.appendChild(checkboxinp);
let lbl=document.createElement("label");
lbl.style.fontFamily="Roboto";
lbl.style.marginLeft="5px";
lbl.setAttribute("for","chid");
lbl.id=lbl;
lbl.textContent="html";
a.appendChild(lbl);
