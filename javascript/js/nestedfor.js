for(let row=1;row<=3;row++) // output 
{
    for(let col=1;col<=row;col++) // *
    {
        document.write("*");      // * *
    }
    document.write("<br>");       // * * *
}

for(let row=1;row<=3;row++)       
{
    for(let col=1;col<=row;col++)   // 1
    {
        document.write(col);        // 1 2
    }
    document.write("<br>");         // 1 2 3
}

for(let row=1;row<=3;row++)        
{
    for(let col=1;col<=row;col++)    // 1
    {
        document.write(row);        // 2 2
    }
    document.write("<br>");        // 3 3 3
}




//square
for(let row=1;row<=3;row++)
{
    for(let col=1;col<=3;col++)   // * * *
    {
        document.write("*");     //  * * *
    }
    document.write("<br>");      //  * * *
}