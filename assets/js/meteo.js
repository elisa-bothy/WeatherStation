const li1 = document.getElementById("by-Welcome");
const li2 = document.getElementById("by-Today");
const li3 = document.getElementById("by-Tomorrow");
const li4 = document.getElementById("by-After-Tomorrow");
const li5 = document.getElementById("by-Contact");
const todayInfo = document.getElementById("today-info");
const container = document.getElementById("container");
const uri = "https://prevision-meteo.ch/services/json/toulouse"; 

fetch(uri)
    .then(resp => {
        if (resp.ok){
            return resp.json();
        }
        else{
            throw new Error("Données non collectées");
        }
    })
    .then(obj => {
        /* const choix = datechoose;
        const img = document.querySelector("img");
        const urlImg = obj.url;
        img.alt = "Image du jour de la Nasa : " + obj.date;
        img.src = urlImg;
        const legend = document.querySelector("legend");
        legend.textContent = obj.title;
        const p = document.querySelector("p");
        p.textContent = obj.explanation */
    })
    .catch(err => {
        console.error(err);
}) 

li1.addEventListener("click", ()=>{
    li1.classList.add("click-on");
    li2.classList.remove("click-on");
    li3.classList.remove("click-on");
    li4.classList.remove("click-on");
    li5.classList.remove("click-on");
    container.innerHTML = "<p>Bienvenue sur Toulouse météo !</p>"    
})
li2.addEventListener("click", ()=>{
    li2.classList.add("click-on");
    li1.classList.remove("click-on");
    li3.classList.remove("click-on");
    li4.classList.remove("click-on");
    li5.classList.remove("click-on");
    container.innerHTML = `<a href="https://www.prevision-meteo.ch/meteo/localite/toulouse"><img src="https://www.prevision-meteo.ch/uploads/widget/toulouse_0.png" max-width="650" height="250" /></a>`;
})
li3.addEventListener("click", ()=>{
    li3.classList.add("click-on");
    li2.classList.remove("click-on");
    li1.classList.remove("click-on");
    li4.classList.remove("click-on");
    li5.classList.remove("click-on");
    container.innerHTML = `<a href="https://www.prevision-meteo.ch/meteo/localite/toulouse"><img src="https://www.prevision-meteo.ch/uploads/widget/toulouse_1.png" max-width="650" height="250" /></a>`;
})
li4.addEventListener("click", ()=>{
    li4.classList.add("click-on");
    li2.classList.remove("click-on");
    li3.classList.remove("click-on");
    li1.classList.remove("click-on");
    li5.classList.remove("click-on");
    container.innerHTML = `<a href="https://www.prevision-meteo.ch/meteo/localite/toulouse"><img src="https://www.prevision-meteo.ch/uploads/widget/toulouse_2.png" max-width="650" height="250" /></a>`;
})
li5.addEventListener("click", ()=>{
    li5.classList.add("click-on");
    li2.classList.remove("click-on");
    li3.classList.remove("click-on");
    li1.classList.remove("click-on");
    li4.classList.remove("click-on");
    container.innerHTML = `<label>Votre nom</label><input type="text"></input><label>Votre prénom</label><input type="text"></input>`;
})