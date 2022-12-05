let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let a=document.getElementById("bt1");
let b=document.getElementById("bt2");
let c=document.getElementById("c1");
function on(){
   img1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
   img2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
   a.style.backgroundColor="white";
   b.style.backgroundColor="red";
   c.textContent="switch on";

}
function off(){
    img1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    img2.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    a.style.backgroundColor="green";
   b.style.backgroundColor="white";
   c.textContent="switch off";
}