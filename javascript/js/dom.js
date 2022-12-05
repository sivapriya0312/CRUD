

function demo(){
    let pw=document.getElementById("inpid").value;
    let sp=document.getElementById("spanid");
    let info;
    if(pw.length<5){
        info="poor";
        console.log(pw.length);
    }
    else {
        info="good"; 
    }
    sp.innerText=info;

}