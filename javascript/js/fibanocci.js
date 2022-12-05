let x=-1;
let y=1;
let z;
for(let s=1;s<=10;s++){
    z=x+y;
    x=y;
    y=z;
    document.write(z+"<br>");
}