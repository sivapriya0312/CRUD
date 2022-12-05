function grade(){
    a=document.getElementById("inp1").value;
    b=document.getElementById("inp2").value;
    ch=document.getElementById("inp3").value;
    
    a=parseInt(a);
    b=parseInt(b);
    ch=parseInt(ch)
    let total;
switch(ch){
    case 1:
        total=a+b;
        alert("total value:"+total);
    break;
    case 2:
        total=a-b;
        alert("total value:"+total);
    break;
    case 3:
        total=a%b;
        alert("total value:"+total);
    break;
    default:
        alert("invalid");
}

}
