 let a=10;
 let b=20;
 
  function swap()
  {
    a=a+b;
    b=a-b;
    a=a-b;
    document.write(a);
    document.write(b);
  }
  swap();
