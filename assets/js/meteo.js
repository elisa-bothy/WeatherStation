const li1 = document.getElementById("by-Welcome");
const li2 = document.getElementById("by-Today");
const li3 = document.getElementById("by-Tomorrow");
const li4 = document.getElementById("by-After-Tomorrow");
const li5 = document.getElementById("by-Contact");
const todayInfo = document.getElementById("today-info");
const container = document.getElementById("container");

window.addEventListener('load', ()=>{
    li1.classList.add("click-on");
    li2.classList.remove("click-on");
    li3.classList.remove("click-on");
    li4.classList.remove("click-on");
    li5.classList.remove("click-on");
    container.innerHTML = `
    <h1>Bienvenue sur Toulouse météo !</h1>
    <p>Ici vous pourrez retrouver la météo de Toulouse sous 3 jours</p>
    <p>Si vous souhaitez afficher la météo d'un autre grande ville</p>
    <br>
    <form>
        <label for="ville" class="firstCol">Veuillez sélectionner la ville</label>
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
    const select = document.querySelector("select");
        const villechoose = select.value;
        console.log(villechoose);
        const uri = "https://www.prevision-meteo.ch/services/json/" + villechoose;
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
            const sunrise = obj.city_info.sunrise;
            const sunset = obj.city_info.sunset;
            todayInfo.innerHTML = `<p>Lever du soleil : `+sunrise+`</p>`
            +`<p>Coucher du soleil : `+sunset+`</p>`;
            const longday1 = obj.fcst_day_1.day_long;
            const date1 = obj.fcst_day_1.date;
            const img1H0 = obj.fcst_day_1.hourly_data?.[0]?.ICON;
            const temp1H0 = obj.fcst_day_1.hourly_data?.[0]?.TMP2m;
            const img1H1 = obj.fcst_day_1.hourly_data?.[1]?.ICON;
            const temp1H1 = obj.fcst_day_1.hourly_data?.[1]?.TMP2m;
            const img1H2 = obj.fcst_day_1.hourly_data?.[2]?.ICON;
            const temp1H2 = obj.fcst_day_1.hourly_data?.[2]?.TMP2m;
            const img1H3 = obj.fcst_day_1.hourly_data?.[3]?.ICON;
            const temp1H3 = obj.fcst_day_1.hourly_data?.[3]?.TMP2m;
            const img1H4 = obj.fcst_day_1.hourly_data?.[4]?.ICON;
            const temp1H4 = obj.fcst_day_1.hourly_data?.[4]?.TMP2m;
            const img1H5 = obj.fcst_day_1.hourly_data?.[5]?.ICON;
            const temp1H5 = obj.fcst_day_1.hourly_data?.[5]?.TMP2m;
            const img1H6 = obj.fcst_day_1.hourly_data?.[6]?.ICON;
            const temp1H6 = obj.fcst_day_1.hourly_data?.[6]?.TMP2m;
            const img1H7 = obj.fcst_day_1.hourly_data?.[7]?.ICON;
            const temp1H7 = obj.fcst_day_1.hourly_data?.[7]?.TMP2m;
            const img1H8 = obj.fcst_day_1.hourly_data?.[8]?.ICON;
            const temp1H8 = obj.fcst_day_1.hourly_data?.[8]?.TMP2m;
            const img1H9 = obj.fcst_day_1.hourly_data?.[9]?.ICON;
            const temp1H9 = obj.fcst_day_1.hourly_data?.[9]?.TMP2m;
            const img1H10 = obj.fcst_day_1.hourly_data?.[10]?.ICON;
            const temp1H10 = obj.fcst_day_1.hourly_data?.[10]?.TMP2m;
            const img1H11 = obj.fcst_day_1.hourly_data?.[11]?.ICON;
            const temp1H11 = obj.fcst_day_1.hourly_data?.[11]?.TMP2m;
            const img1H12 = obj.fcst_day_1.hourly_data?.[12]?.ICON;
            const temp1H12 =obj.fcst_day_1.hourly_data?.[12]?.TMP2m;
            const img1H13 = obj.fcst_day_1.hourly_data?.[13]?.ICON;
            const temp1H13 = obj.fcst_day_1.hourly_data?.[13]?.TMP2m;
            const img1H14 = obj.fcst_day_1.hourly_data?.[14]?.ICON;
            const temp1H14 = obj.fcst_day_1.hourly_data?.[14]?.TMP2m;
            const img1H15 = obj.fcst_day_1.hourly_data?.[15]?.ICON;
            const temp1H15 = obj.fcst_day_1.hourly_data?.[15]?.TMP2m;
            const img1H16 = obj.fcst_day_1.hourly_data?.[16]?.ICON;
            const temp1H16 = obj.fcst_day_1.hourly_data?.[16]?.TMP2m;
            const img1H17 = obj.fcst_day_1.hourly_data?.[17]?.ICON;
            const temp1H17 = obj.fcst_day_1.hourly_data?.[17]?.TMP2m;
            const img1H18 = obj.fcst_day_1.hourly_data?.[18]?.ICON;
            const temp1H18 = obj.fcst_day_1.hourly_data?.[18]?.TMP2m;
            const img1H19 = obj.fcst_day_1.hourly_data?.[19]?.ICON;
            const temp1H19 = obj.fcst_day_1.hourly_data?.[19]?.TMP2m;
            const img1H20 = obj.fcst_day_1.hourly_data?.[20]?.ICON;
            const temp1H20 = obj.fcst_day_1.hourly_data?.[20]?.TMP2m;
            const img1H21 = obj.fcst_day_1.hourly_data?.[21]?.ICON;
            const temp1H21 = obj.fcst_day_1.hourly_data?.[21]?.TMP2m;
            const img1H22 = obj.fcst_day_1.hourly_data?.[22]?.ICON;
            const temp1H22 = obj.fcst_day_1.hourly_data?.[22]?.TMP2m;
            const img1H23 = obj.fcst_day_1.hourly_data?.[23]?.ICON;
            const temp1H23 = obj.fcst_day_1.hourly_data?.[23]?.TMP2m;
            const longday2 = obj.fcst_day_2.day_long;
            const date2 = obj.fcst_day_2.date;
            const img2H0 = obj.fcst_day_2.hourly_data?.[0]?.ICON;
            const temp2H0 = obj.fcst_day_2.hourly_data?.[0]?.TMP2m;
            const img2H1 = obj.fcst_day_2.hourly_data?.[1]?.ICON;
            const temp2H1 = obj.fcst_day_2.hourly_data?.[1]?.TMP2m;
            const img2H2 = obj.fcst_day_2.hourly_data?.[2]?.ICON;
            const temp2H2 = obj.fcst_day_2.hourly_data?.[2]?.TMP2m;
            const img2H3 = obj.fcst_day_2.hourly_data?.[3]?.ICON;
            const temp2H3 = obj.fcst_day_2.hourly_data?.[3]?.TMP2m;
            const img2H4 = obj.fcst_day_2.hourly_data?.[4]?.ICON;
            const temp2H4 = obj.fcst_day_2.hourly_data?.[4]?.TMP2m;
            const img2H5 = obj.fcst_day_2.hourly_data?.[5]?.ICON;
            const temp2H5 = obj.fcst_day_2.hourly_data?.[5]?.TMP2m;
            const img2H6 = obj.fcst_day_2.hourly_data?.[6]?.ICON;
            const temp2H6 = obj.fcst_day_2.hourly_data?.[6]?.TMP2m;
            const img2H7 = obj.fcst_day_2.hourly_data?.[7]?.ICON;
            const temp2H7 = obj.fcst_day_2.hourly_data?.[7]?.TMP2m;
            const img2H8 = obj.fcst_day_2.hourly_data?.[8]?.ICON;
            const temp2H8 = obj.fcst_day_2.hourly_data?.[8]?.TMP2m;
            const img2H9 = obj.fcst_day_2.hourly_data?.[9]?.ICON;
            const temp2H9 = obj.fcst_day_2.hourly_data?.[9]?.TMP2m;
            const img2H10 = obj.fcst_day_2.hourly_data?.[10]?.ICON;
            const temp2H10 = obj.fcst_day_2.hourly_data?.[10]?.TMP2m;
            const img2H11 = obj.fcst_day_2.hourly_data?.[11]?.ICON;
            const temp2H11 = obj.fcst_day_2.hourly_data?.[11]?.TMP2m;
            const img2H12 = obj.fcst_day_2.hourly_data?.[12]?.ICON;
            const temp2H12 = obj.fcst_day_2.hourly_data?.[12]?.TMP2m;
            const img2H13 = obj.fcst_day_2.hourly_data?.[13]?.ICON;
            const temp2H13 = obj.fcst_day_2.hourly_data?.[13]?.TMP2m;
            const img2H14 = obj.fcst_day_2.hourly_data?.[14]?.ICON;
            const temp2H14 = obj.fcst_day_2.hourly_data?.[14]?.TMP2m;
            const img2H15 = obj.fcst_day_2.hourly_data?.[15]?.ICON;
            const temp2H15 = obj.fcst_day_2.hourly_data?.[15]?.TMP2m;
            const img2H16 = obj.fcst_day_2.hourly_data?.[16]?.ICON;
            const temp2H16 = obj.fcst_day_2.hourly_data?.[16]?.TMP2m;
            const img2H17 = obj.fcst_day_2.hourly_data?.[17]?.ICON;
            const temp2H17 = obj.fcst_day_2.hourly_data?.[17]?.TMP2m;
            const img2H18 = obj.fcst_day_2.hourly_data?.[18]?.ICON;
            const temp2H18 = obj.fcst_day_2.hourly_data?.[18]?.TMP2m;
            const img2H19 = obj.fcst_day_2.hourly_data?.[19]?.ICON;
            const temp2H19 = obj.fcst_day_2.hourly_data?.[19]?.TMP2m;
            const img2H20 = obj.fcst_day_2.hourly_data?.[20]?.ICON;
            const temp2H20 = obj.fcst_day_2.hourly_data?.[20]?.TMP2m;
            const img2H21 = obj.fcst_day_2.hourly_data?.[21]?.ICON;
            const temp2H21 = obj.fcst_day_2.hourly_data?.[21]?.TMP2m;
            const img2H22 = obj.fcst_day_2.hourly_data?.[22]?.ICON;
            const temp2H22 = obj.fcst_day_2.hourly_data?.[22]?.TMP2m;
            const img2H23 = obj.fcst_day_2.hourly_data?.[23]?.ICON;
            const temp2H23 = obj.fcst_day_2.hourly_data?.[23]?.TMP2m;
            const longday0 = obj.fcst_day_0.day_long;
            const date0 = obj.fcst_day_0.date;
            const img0H0 = obj.fcst_day_0.hourly_data?.[0]?.ICON;
            const temp0H0 = obj.fcst_day_0.hourly_data?.[0]?.TMP2m;
            const img0H1 = obj.fcst_day_0.hourly_data?.[1]?.ICON;
            const temp0H1 = obj.fcst_day_0.hourly_data?.[1]?.TMP2m;
            const img0H2 = obj.fcst_day_0.hourly_data?.[2]?.ICON;
            const temp0H2 = obj.fcst_day_0.hourly_data?.[2]?.TMP2m;
            const img0H3 = obj.fcst_day_0.hourly_data?.[3]?.ICON;
            const temp0H3 = obj.fcst_day_0.hourly_data?.[3]?.TMP2m;
            const img0H4 = obj.fcst_day_0.hourly_data?.[4]?.ICON;
            const temp0H4 = obj.fcst_day_0.hourly_data?.[4]?.TMP2m;
            const img0H5 = obj.fcst_day_0.hourly_data?.[5]?.ICON;
            const temp0H5 = obj.fcst_day_0.hourly_data?.[5]?.TMP2m;
            const img0H6 = obj.fcst_day_0.hourly_data?.[6]?.ICON;
            const temp0H6 = obj.fcst_day_0.hourly_data?.[6]?.TMP2m;
            const img0H7 = obj.fcst_day_0.hourly_data?.[7]?.ICON;
            const temp0H7 = obj.fcst_day_0.hourly_data?.[7]?.TMP2m;
            const img0H8 = obj.fcst_day_0.hourly_data?.[8]?.ICON;
            const temp0H8 = obj.fcst_day_0.hourly_data?.[8]?.TMP2m;
            const img0H9 = obj.fcst_day_0.hourly_data?.[9]?.ICON;
            const temp0H9 = obj.fcst_day_0.hourly_data?.[9]?.TMP2m;
            const img0H10 = obj.fcst_day_0.hourly_data?.[10]?.ICON;
            const temp0H10 = obj.fcst_day_0.hourly_data?.[10]?.TMP2m;
            const img0H11 = obj.fcst_day_0.hourly_data?.[11]?.ICON;
            const temp0H11 = obj.fcst_day_0.hourly_data?.[11]?.TMP2m;
            const img0H12 = obj.fcst_day_0.hourly_data?.[12]?.ICON;
            const temp0H12 = obj.fcst_day_0.hourly_data?.[12]?.TMP2m;
            const img0H13 = obj.fcst_day_0.hourly_data?.[13]?.ICON;
            const temp0H13 = obj.fcst_day_0.hourly_data?.[13]?.TMP2m;
            const img0H14 = obj.fcst_day_0.hourly_data?.[14]?.ICON;
            const temp0H14 = obj.fcst_day_0.hourly_data?.[14]?.TMP2m;
            const img0H15 = obj.fcst_day_0.hourly_data?.[15]?.ICON;
            const temp0H15 = obj.fcst_day_0.hourly_data?.[15]?.TMP2m;
            const img0H16 = obj.fcst_day_0.hourly_data?.[16]?.ICON;
            const temp0H16 = obj.fcst_day_0.hourly_data?.[16]?.TMP2m;
            const img0H17 = obj.fcst_day_0.hourly_data?.[17]?.ICON;
            const temp0H17 = obj.fcst_day_0.hourly_data?.[17]?.TMP2m;
            const img0H18 = obj.fcst_day_0.hourly_data?.[18]?.ICON;
            const temp0H18 = obj.fcst_day_0.hourly_data?.[18]?.TMP2m;
            const img0H19 = obj.fcst_day_0.hourly_data?.[19]?.ICON;
            const temp0H19 = obj.fcst_day_0.hourly_data?.[19]?.TMP2m;
            const img0H20 = obj.fcst_day_0.hourly_data?.[20]?.ICON;
            const temp0H20 = obj.fcst_day_0.hourly_data?.[20]?.TMP2m;
            const img0H21 = obj.fcst_day_0.hourly_data?.[21]?.ICON;
            const temp0H21 = obj.fcst_day_0.hourly_data?.[21]?.TMP2m;
            const img0H22 = obj.fcst_day_0.hourly_data?.[22]?.ICON;
            const temp0H22 = obj.fcst_day_0.hourly_data?.[22]?.TMP2m;
            const img0H23 = obj.fcst_day_0.hourly_data?.[23]?.ICON;
            const temp0H23 = obj.fcst_day_0.hourly_data?.[23]?.TMP2m;

            li1.addEventListener("click", ()=>{
                li1.classList.add("click-on");
                li2.classList.remove("click-on");
                li3.classList.remove("click-on");
                li4.classList.remove("click-on");
                li5.classList.remove("click-on");
                container.innerHTML = `
                <h1>Bienvenue sur Toulouse météo !</h1>
                <p>Ici vous pourrez retrouver la météo de Toulouse sous 3 jours</p>
                <p>Si vous souhaitez afficher la météo d'un autre grande ville</p>
                <br>
                <form>
                    <label for="ville" class="firstCol">Veuillez sélectionner la ville</label>
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
                const inputVille = document.getElementById("submit-ville");
                inputVille.addEventListener("click", ()=>{
                    const select = document.querySelector("select");
                    const villechoose = select.value;
                    console.log(villechoose);
                    const uri = "https://www.prevision-meteo.ch/services/json/" + villechoose;
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
                })
            })
            li2.addEventListener("click", ()=>{
                li2.classList.add("click-on");
                li1.classList.remove("click-on");
                li3.classList.remove("click-on");
                li4.classList.remove("click-on");
                li5.classList.remove("click-on");
                container.innerHTML = `<h1>La météo de`+ villechoose +`du`+ longday0 + date0 +`</h1>
                <table>
                    <tr>`+ temp0H0 +`</tr>
                    <td>`+ img0H0 +`</td>
                    <tr>`+ temp0H1 +`</tr>
                    <td>`+ img0H1 +`</td>
                    <tr>`+ temp0H2 +`</tr>
                    <td>`+ img0H2 +`</td>
                    <tr>`+ temp0H3 +`</tr>
                    <td>`+ img0H3 +`</td>
                    <tr>`+ temp0H4 +`</tr>
                    <td>`+ img0H4 +`</td>
                    <tr>`+ temp0H5 +`</tr>
                    <td>`+ img0H5 +`</td>
                    <tr>`+ temp0H6 +`</tr>
                    <td>`+ img0H6 +`</td>
                    <tr>`+ temp0H7 +`</tr>
                    <td>`+ img0H7 +`</td>
                    <tr>`+ temp0H8 +`</tr>
                    <td>`+ img0H8 +`</td>
                    <tr>`+ temp0H9 +`</tr>
                    <td>`+ img0H9 +`</td>
                    <tr>`+ temp0H10 +`</tr>
                    <td>`+ img0H10 +`</td>
                    <tr>`+ temp0H11 +`</tr>
                    <td>`+ img0H11 +`</td>
                    <tr>`+ temp0H12 +`</tr>
                    <td>`+ img0H12 +`</td>
                    <tr>`+ temp0H13 +`</tr>
                    <td>`+ img0H13 +`</td>
                    <tr>`+ temp0H14 +`</tr>
                    <td>`+ img0H14 +`</td>
                    <tr>`+ temp0H15 +`</tr>
                    <td>`+ img0H15 +`</td>
                    <tr>`+ temp0H16 +`</tr>
                    <td>`+ img0H16 +`</td>
                    <tr>`+ temp0H17 +`</tr>
                    <td>`+ img0H17 +`</td>
                    <tr>`+ temp0H18 +`</tr>
                    <td>`+ img0H18 +`</td>
                    <tr>`+ temp0H19 +`</tr>
                    <td>`+ img0H19 +`</td>
                    <tr>`+ temp0H20 +`</tr>
                    <td>`+ img0H20 +`</td>
                    <tr>`+ temp0H21 +`</tr>
                    <td>`+ img0H21 +`</td>
                    <tr>`+ temp0H22 +`</tr>
                    <td>`+ img0H22 +`</td>
                    <tr>`+ temp0H23 +`</tr>
                    <td>`+ img0H23 +`</td>
                </table>`;
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
                container.innerHTML = `
                <form id="inscriptionForm">
                    <fieldset>
                        <label for="nom" class="firstCol">Nom</label>
                        <input type="text" name="nom" id="nom" size="20" min="2" max="50" placeholder="Votre nom">
                        <br>
                        <label for="prenom" class="firstCol">Prénom</label>
                        <input type="text" name="prenom" id="prenom" size="20" min="2" max="50" placeholder="Votre prenom">
                        <br>
                        <label for="mail" class="firstCol">E-Mail</label>
                        <input type="text" name="mail" id="mail" size="20" min="2" max="50" placeholder="Votre e-mail">
                        <br>
                        <label for="message" class="firstCol">Message</label>
                        <input type="text" name="message" id="message" size="80" min="2" max="500" placeholder="Votre message en moins de 500 caractères">
                        <br>
                        <a id="mailto" href="mailto:elisa.bothy@gmail.com"><input type="submit" name='submit' id='submit' value="Soumettre"></a>
                    </fieldset>
                </form>`;
            })
        })
        .catch(err => {
            console.error(err);
        }) 
    const inputVille = document.getElementById("submit-ville");
    inputVille.addEventListener("click", ()=>{
        const select = document.querySelector("select");
        const villechoose = select.value;
        console.log(villechoose);
        const uri = "https://www.prevision-meteo.ch/services/json/" + villechoose;
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
            

        })
        .catch(err => {
            console.error(err);
        }) 
    })
})