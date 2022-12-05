let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let h=document.getElementById("head");
let i=document.getElementById("imgid");
let ul=document.getElementById("ulid");
let ing=document.getElementById("ing");

ing.style.backgroundColor="#041633";
ing.style.width="530px";
ing.style.height="240px";
ing.style.borderRadius="10px";

h.textContent=recipeObj.title;
h.style.color="red";
h.style.fontFamily="cursive";
i.src=recipeObj.imgSrc;
i.style.width="530px";

let data=recipeObj.ingredients;
for(let i of data){
    let li=document.createElement("li");
    li.textContent=i;
    ul.appendChild(li);
}