window.onload = (event) => {
    let myAlert = document.getElementById('Toast-Alert');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}

var Mapa = document.getElementById("KatastarImageMapBlock");
var Interactive = document.getElementById("KatastarInteractMapBlock");
var x = document.getElementById("ToolTip");

function DisplayMap() {
    Mapa.classList.add("col-lg-12");
    Mapa.classList.remove("d-none");
    Interactive.classList.add("col-lg-12");
    Interactive.classList.add("d-none");
    x.innerHTML = "<strong>Тренутан приказ - <span class='text-decoration-underline'>Карта</span></strong><br><br>";
}

function DisplayMapNInteract() {
    Mapa.classList.remove("col-lg-12");
    Mapa.classList.remove("d-none");
    Interactive.classList.remove("col-lg-12");
    Interactive.classList.remove("d-none");
    x.innerHTML = "<strong>Тренутан приказ - <span class='text-decoration-underline'>Карта + Мапа</span></strong><br><br>";
}

function DisplayInteract() {
    Mapa.classList.remove("col-lg-12");
    Mapa.classList.add("d-none");
    Interactive.classList.add("col-lg-12");
    Interactive.classList.remove("d-none");
    x.innerHTML = "<strong>Тренутан приказ - <span class='text-decoration-underline'>Мапа</span></strong><br><br>";
}