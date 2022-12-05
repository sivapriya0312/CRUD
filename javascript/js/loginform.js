function form()
{
    let a=document.getElementById("n1").value;
    let b=document.getElementById("n2").value;
    let c=document.getElementById("qualification").value;
    let d=document.getElementById("n3").value;
    let e=document.getElementById("n4").value;
    let f=document.getElementById("n5").value;
    let g=document.getElementById("n6").value;
    let h=document.getElementById("n7").value;
    let i=document.getElementById("n8").value;

    document.write("Name:"+(a)+"<br>"+"Reg.no:"+(b)+"<br>"+"My qualification:"+(c)+"<br>"+"gender:"+(d)+"<br>"+"Age:"+(e)+"<br>"+"DoB:"+(f)+"<br>"+"Address:"+(g)+"<br>"+"Mobile.no:"+(h)+"<br>"+"E-mail:"+(i)+"<br>");

    alert((a+"\n")+(b+"\n")+(c+"\n")+(d+"\n")+(e+"\n")+(f+"\n")+(g+"\n")+(h+"\n")+(i+"\n"));

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(i);
}