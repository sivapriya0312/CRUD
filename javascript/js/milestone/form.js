 
    let n1=document.getElementById("n1").value;
    let e1=document.getElementById("e1").value;
    let d1=document.getElementById("d1").value;
    let b1=document.getElementById("b1");
    let hr=document.getElementById("hr");
    let da=document.getElementById("da");
    let pf=document.getElementById("pf");
    let gp=document.getElementById("gp");
    let np=document.getElementById("np");

    function nm(){
    let n1=document.getElementById("n1").value;
    let spid=document.getElementById("spanid");
    let res;
    if(n1.length>5){
        res="Strong";
    }
    else{
        res="Weak";
    }
    spid.textContent=res;
    }

    function employeeid(){
        let e1=document.getElementById("e1").value;
        let spid1=document.getElementById("spanid1");
        let output;
        if(e1.length!=""){
            output="ok";
        }
        else{
            output="Enter value";
        }
    spid1.textContent=output;    
    }

    function job(){
    let d1=document.getElementById("d1").value;
    let spid2=document.getElementById("spanid2");
    let jobop;
    if(d1.length!=""){
        jobop="ok";
    }
    else{
        jobop="Enter value";
    }
spid2.textContent=jobop;    
}

function baspay(){
    let b1=document.getElementById("b1").value;
    
    let hr=document.getElementById("hr").value=b1*0.15;
    let da=document.getElementById("da").value=b1*0.10;
    let pf=document.getElementById("pf").value=b1*0.5;
    
    b1=parseInt(b1);
    hr=parseInt(hr);
    da=parseInt(da);
    pf=parseInt(pf);
    
    let np=document.getElementById("np").value=(b1+hr+da);
    let gp=document.getElementById("gp").value=(np-pf);
}

function sub(){
let n1=document.getElementById("n1").value;
let e1=document.getElementById("e1").value;
let d1=document.getElementById("d1").value;
let b1=document.getElementById("b1").value;
let hr=document.getElementById("hr").value;
let da=document.getElementById("da").value;
let pf=document.getElementById("pf").value;
let gp=document.getElementById("gp").value;
let np=document.getElementById("np").value;
p1.innerHTML=("name : "+n1+"<br>"+"Employee id :"+e1+"<br>"+"Designation : "+d1+"<br>"+"Basic pay : "+b1+"<br>"+"HR : "+hr+"<br>"+"DA : "+da+"<br>"+"PF : "+pf+"<br>"+"Net Pay: "+np+"<br>"+"Gross Pay: "+gp);
}
