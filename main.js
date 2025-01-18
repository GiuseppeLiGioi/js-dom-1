

/*
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato.
Accanto un bottone con la scritta “Accendi”.
Al click del bottone, 
la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
*/

let bottone = document.getElementById("btn");
let lampadina = document.getElementById("img");


bottone.addEventListener("click", () =>{
if(lampadina.src.includes("img/white_lamp.png") ){
    lampadina.src="img/yellow_lamp.png";
    //aggiungo parte bonus
    bottone.innerHTML="spegni";
}
else{
    lampadina.src="img/white_lamp.png";
    bottone.innerHTML="accendi";
}
})