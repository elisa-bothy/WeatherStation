window.addEventListener("scroll", () =>{
    const header = document.querySelector("header");
    header.classList.toggle("header-js", window.scrollY > 100)
})

const li1 = document.getElementById("by-Welcome");
const li2 = document.getElementById("by-Today");
const li3 = document.getElementById("by-Tomorrow");
const li4 = document.getElementById("by-After-Tomorrow");
const li5 = document.getElementById("by-Contact");

