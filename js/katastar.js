function DisplayMap(number) {
    var x = document.getElementById("ToolTip");
    const text = [
    "",
    "<span style='color: yellow; background-color: #444;'><strong>Жута боја</strong></span> означава регулисану зону државног власништва.<br><strong>Бела боја</strong> означава државно власништво.<br>",
    "",
    ];

    x.innerHTML = text[number];
    if (number==0) {
        document.getElementById("KatastarIMG").src = "../../img/Pages/Katastar/emptymap.png"
    } else if (number==1) {
        document.getElementById("KatastarIMG").src = "../../img/Pages/Katastar/drawnmap.png"
    } else if (number==2) {
        document.getElementById("KatastarIMG").src = "../../img/Pages/Katastar/coordmap.png"
    }
}