const li1 = document.getElementById("by-Welcome");
const li2 = document.getElementById("by-Today");
const li3 = document.getElementById("by-Tomorrow");
const li4 = document.getElementById("by-After-Tomorrow");
const li5 = document.getElementById("by-Contact");
const container = document.getElementById("container");
let heure; let nomVille ;let longday1 ;let date1 ;let longday2 ;
let date2 ;let longday0;let date0;let inputVille; let select;
const iconAvecTempsJ0={};const iconAvecTempsJ1={};const iconAvecTempsJ2={};
const saintsAvecSexe=[];

window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY; // Récupère la position de défilement verticale
    const header = document.querySelector("header");

    // Ajoute la classe "headerScroll" si la position de défilement est supérieure à 10 pixels
    if (scrollPosition > 65) {
        header.classList.add("headerScroll");
    } else {
        // Si la position de défilement est inférieure à 10 pixels, retire la classe
        header.classList.remove("headerScroll");
    }
});

function FetchSaints(){
    const uri2 = "https://nominis.cef.fr/json/nominis.php";     
    fetch(uri2)
    .then(resp => {
        if (resp.ok){
            return resp.json();
        }
        else{
            throw new Error("Données non collectées");
        }
    })
    .then(obj => {
        /* les saints */
        const prenomsMajeurs = obj.response.prenoms.majeurs;

    if (prenomsMajeurs) {
        const nomsPrenomsMajeurs = Object.keys(prenomsMajeurs);
        nomsPrenomsMajeurs.forEach(nom => {
            const saint = prenomsMajeurs[nom];
            const sexe = saint.sexe;
            saintsAvecSexe.push({ nom, sexe });
        }); 
        const pSaint1 = document.getElementById("p-saint1");
        const pSaint2 = document.getElementById("p-saint2");
        const saint1 = document.getElementById("saint1");
        const saint2 = document.getElementById("saint2");

        pSaint1.innerHTML = `${saintsAvecSexe[0].nom}`;
        pSaint2.innerHTML = `${saintsAvecSexe[1].nom}`;

        if (saintsAvecSexe[0].sexe === "féminin"){
            saint1.src = "assets/photos/icons8-angel-100.png";
            saint1.alt = "Un ange pour représenter le saint féminin du jour";
        }
        else{
            saint1.src = "assets/photos/icons8-halo-100.png";
            saint1.alt = "Une auréole pour représenter le saint masculin du jour";
        }
        if (saintsAvecSexe[1].sexe === "féminin"){
            saint2.src = "assets/photos/icons8-angel-100.png";
            saint2.alt = "Un ange pour représenter le saint féminin du jour";
        }
        else{
            saint2.src = "assets/photos/icons8-halo-100.png";
            saint2.alt = "Une auréole pour représenter le saint masculin du jour";
        }
    } else {
        console.error("La liste des prénoms majeurs est undefined.");
    } 
    })
    .catch(err => {
        console.error(err);
    }) 
}

function FetchMeteo(){
        select = document.querySelector("select");
        console.log(select.value);
        let villechoose = select.value;
        console.log(villechoose);
        let uri = "https://www.prevision-meteo.ch/services/json/" + villechoose;
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
            console.log(obj);
            nomVille = obj.city_info.name;
            longday0 = obj.fcst_day_0.day_long;
            date0 = obj.fcst_day_0.date;
            longday1 = obj.fcst_day_1.day_long;
            date1 = obj.fcst_day_1.date;
            longday2 = obj.fcst_day_2.day_long;
            date2 = obj.fcst_day_2.date;
            const hourlyData0 = obj.fcst_day_0.hourly_data;
            if (hourlyData0) {
                const hour = Object.keys(hourlyData0);
                hour.forEach(h => {
                    const time = hourlyData0[h];
                    const temps = time.TMP2m;
                    const icon = time.ICON;
                    const humidity = time.RH2m;
                    iconAvecTempsJ0[h] = {temps, icon, humidity};
                });  
            } 
            const hourlyData1 = obj.fcst_day_1.hourly_data;
            if (hourlyData1) {
                const hour = Object.keys(hourlyData1);
                hour.forEach(h => {
                    const time = hourlyData1[h];
                    const temps = time.TMP2m;
                    const icon = time.ICON;
                    const humidity = time.RH2m;
                    iconAvecTempsJ1[h] = {temps, icon, humidity};
                });  
            }
            const hourlyData2 = obj.fcst_day_2.hourly_data;
            if (hourlyData2) {
                const hour = Object.keys(hourlyData2);
                hour.forEach(h => {
                    const time = hourlyData2[h];
                    const temps = time.TMP2m;
                    const icon = time.ICON;
                    const humidity = time.RH2m;
                    iconAvecTempsJ2[h] = {temps, icon, humidity};
                });  
                console.log(iconAvecTempsJ0["0H00"].humidity);
            } 
           /* Ici Données */
    })
    .catch(err => {
        console.error(err);
    }) 
}

function InfoVille(){
        villechoose = select.value;
        console.log(villechoose);
        let uri = "https://www.prevision-meteo.ch/services/json/" + villechoose;
                
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
            const pSunrise = document.getElementById("p-sunrise");
            const pSunset = document.getElementById("p-sunset");
            pSunrise.innerHTML = `${obj.city_info.sunrise}`;
            pSunset.innerHTML = `${obj.city_info.sunset}`;

            setInterval(function() {
                let heure1 = new Date();

                function twoDigit(n) {
                    return (n < 10) ? '0' + n : n;
                }

                let h = heure1.getHours();
                h = twoDigit(h);
                let minute = heure1.getMinutes();
                minute = twoDigit(minute);
                let seconde = heure1.getSeconds();  
                seconde = twoDigit(seconde);

                heure = h + ":" + minute + ":" + seconde;
                const pHeure = document.getElementById("heure");
                pHeure.innerHTML = `${heure}`;
            }, 1000);
        })
        .catch(err => {
            console.error(err);
        }) 
}

function AfficherWelcome(){
    container.innerHTML = `
    <h1>Bienvenue sur Toulouse météo !</h1>
    <p>Ici vous pourrez retrouver la météo de Toulouse sous 3 jours</p>
    <p>Si vous souhaitez afficher la météo d'un autre grande ville</p>
    <br>
    <form>
        <label for="ville" class="firstCol" id="label-ville">Veuillez sélectionner la ville</label>
        <select name="ville" id="ville">
            <option value="toulouse" selected>Toulouse</option>
            <option value="paris">Paris</option>
            <option value="marseille">Marseille</option>
            <option value="lyon">Lyon</option>
            <option value="nice">Nice</option>
            <option value="nantes">Nantes</option>
            <option value="montpelier">Montpelier</option>
            <option value="strasbourg">Strasbourg</option>
            <option value="bordeaux">Bordeaux</option>
            <option value="lille">Lille</option>
        </select>
        <input type="submit" name='submit' id='submit-ville' value="Soumettre">
    </form>`
        inputVille = document.getElementById("submit-ville");
        inputVille.addEventListener("click", ()=>{
        FetchMeteo();
    });
}

window.addEventListener('load', ()=>{
    li1.classList.add("click-on");
    li2.classList.remove("click-on");
    li3.classList.remove("click-on");
    li4.classList.remove("click-on");
    li5.classList.remove("click-on");
    AfficherWelcome();
    FetchSaints();
    FetchMeteo();
    InfoVille();
    inputVille = document.getElementById("submit-ville");
    select = document.querySelector("select");
    let debounce = false;
    const buttonAnimate = () => {
        inputVille.classList.add("animate");
        setTimeout(() => {
            $button.classList.remove("animate");
            debounce = false;
        }, 700);
        if (debounce) return;
        debounce = true;
        buttonAnimate();                
        villechoose = select.value;
        console.log(villechoose);
    };
})
        


li1.addEventListener("click", ()=>{
    li1.classList.add("click-on");
    li2.classList.remove("click-on");
    li3.classList.remove("click-on");
    li4.classList.remove("click-on");
    li5.classList.remove("click-on");
    AfficherWelcome();
    let debounce = false;
    const buttonAnimate = () => {
        inputVille.classList.add("animate");
        setTimeout(() => {
            $button.classList.remove("animate");
            debounce = false;
        }, 700);
        if (debounce) return;
        debounce = true;
        buttonAnimate();                
        villechoose = select.value;
        console.log(villechoose);
    };
}); 




li2.addEventListener("click", ()=>{
    li2.classList.add("click-on");
    li1.classList.remove("click-on");
    li3.classList.remove("click-on");
    li4.classList.remove("click-on");
    li5.classList.remove("click-on");
    container.innerHTML = `<h1>La météo de `+ nomVille +` du `+ longday0 + ` ` + date0 +`</h1>
    <table>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H00`;
                    tdContent += `<td>${iconAvecTempsJ0[hourKey].temps}</td>`;
                }
                return tdContent;
            })()}
        </tr>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H00`;
                    if(iconAvecTempsJ0[hourKey].humidity>=60){
                        tdContent += `<td>${iconAvecTempsJ0[hourKey].humidity}%</td>`;
                    }
                    else{
                        tdContent += ``;
                    }
                }
                return tdContent;
            })()}
        </tr>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H00`;
                    tdContent += `<td>
                                    <img src="${iconAvecTempsJ0[hourKey].icon}" alt="Le temps à ${i}H">
                                    </td>`;
                }
                return tdContent;
            })()}
        </tr>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H`;
                    tdContent += `<td>${hourKey}</td>`;
                }
                return tdContent;
            })()}
        </tr>
    </table>`;
});

li3.addEventListener("click", ()=>{
    li3.classList.add("click-on");
    li2.classList.remove("click-on");
    li1.classList.remove("click-on");
    li4.classList.remove("click-on");
    li5.classList.remove("click-on");
    container.innerHTML = `<h1>La météo de `+ nomVille +` du `+ longday1 + ` ` + date1 +`</h1>
    <table>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H00`;
                    tdContent += `<td>${iconAvecTempsJ1[hourKey].temps}</td>`;
                }
                return tdContent;
            })()}
        </tr>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H00`;
                    if(iconAvecTempsJ1[hourKey].humidity>=60){
                        tdContent += `<td>${iconAvecTempsJ1[hourKey].humidity}%</td>`;
                    }
                    else{
                        tdContent += ``;
                    }
                }
                return tdContent;
            })()}
        </tr>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H00`;
                    tdContent += `<td>
                                    <img src="${iconAvecTempsJ1[hourKey].icon}" alt="Le temps à ${i}H">
                                    </td>`;
                }
                return tdContent;
            })()}
        </tr>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H`;
                    tdContent += `<td>${hourKey}</td>`;
                }
                return tdContent;
            })()}
        </tr>
    </table>`;
});

li4.addEventListener("click", ()=>{
    li4.classList.add("click-on");
    li2.classList.remove("click-on");
    li3.classList.remove("click-on");
    li1.classList.remove("click-on");
    li5.classList.remove("click-on");
    container.innerHTML = `<h1>La météo de `+ nomVille +` du `+ longday2 + ` ` + date2 +`</h1>
    <table>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H00`;
                    tdContent += `<td>${iconAvecTempsJ2[hourKey].temps}</td>`;
                }
                return tdContent;
            })()}
        </tr>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H00`;
                    if(iconAvecTempsJ2[hourKey].humidity>=60){
                        tdContent += `<td>${iconAvecTempsJ2[hourKey].humidity}%</td>`;
                    }
                    else{
                        tdContent += ``;
                    }
                }
                return tdContent;
            })()}
        </tr>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H00`;
                    tdContent += `<td>
                                    <img src="${iconAvecTempsJ2[hourKey].icon}" alt="Le temps à ${i}H">
                                    </td>`;
                }
                return tdContent;
            })()}
        </tr>
        <tr>
            ${(() => {
                let tdContent = '';
                for (let i = 0; i < 23; i++) {
                    const hourKey = `${i}H`;
                    tdContent += `<td>${hourKey}</td>`;
                }
                return tdContent;
            })()}
        </tr>
    </table>`;
});

li5.addEventListener("click", ()=>{
    li5.classList.add("click-on");
    li2.classList.remove("click-on");
    li3.classList.remove("click-on");
    li1.classList.remove("click-on");
    li4.classList.remove("click-on");
    container.innerHTML = `
    <form id="inscriptionForm">
        <fieldset>
            <input type="text" required name="nom" id="nom" size="20" min="2" max="50" placeholder="Votre nom">
            <br>
            <input type="text" required name="prenom" id="prenom" size="20" min="2" max="50" placeholder="Votre prenom">
            <br>
            <input type="text" required name="mail" id="mail" size="20" min="2" max="50" placeholder="Votre e-mail">
            <br>
            <textarea type="text" required name="message" id="message" minlength="10" maxlenght="500" placeholder="Votre message en moins de 500 caractères"></textarea>
            <br>
            <br>
            <a id="mailto" href="mailto:elisa.botry@gmail.com"><input type="submit" name='submit' id='submit' value="Soumettre"></a>
        </fieldset>
    </form>`;
});