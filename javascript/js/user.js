let profileDetails = {

    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "Ravi",
    age: 25
};

let img=document.getElementById("img1");
let n=document.getElementById("name1");
let a=document.getElementById("age1");

img.src=profileDetails.imgSrc;
profileDetails.name="RAHUL ATTULURI";
n.textContent= profileDetails.name;
a.textContent= ("Age:"+profileDetails.age);
