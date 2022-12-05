function area(){
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let c=document.getElementById("c").value;
    a=parseInt(a);
    b=parseInt(b);
    c=parseInt(c);
    let s=(a+b+c)/2;
    let area=Math.sqrt((s*(s-a)*(s-b)*(s-c)));
    document.write("Area of triangle"+area);
}