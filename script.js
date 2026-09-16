let nav=document.querySelector("nav");
let links=document.querySelector("#nav-links");

let menu=document.createElement("i");
menu.className="ri-menu-line";

nav.appendChild(menu);

menu.addEventListener("click",()=>{
    links.classList.toggle("show");
});