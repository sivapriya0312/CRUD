function check(){
    mark=document.getElementById("inp1").value;
if(mark==''){
    document.write("enter a valid number");
}
else if (mark>=40)
{
    document.getElementById("inp2").innerHTML=("You are pass");
}
else{
    document.write("fail");
}
}

/*
if (rate>100)
{
    document.write("this is original"+"<br>");
}
else{
    document.write("duplicate");
}


if (age>=18)
{
    document.write("you are eligible for voting"+"<br>");
}
else{
    document.write("you are not eligible");
}
*/