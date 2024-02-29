function DisplayFullResMap(number) {
    var x = document.getElementById("ToolTip");
    const text = [
    "<strong style='text-decoration: underline;'>Тренутан приказ мапе - Празна мапа (Висока резолуција)</strong>",
    "<strong style='text-decoration: underline;'>Тренутан приказ мапе - Исцртана мапа (Висока резолуција)</strong><br><br><span style='color: yellow; background-color: #444;'><strong>Жута боја</strong></span> означава регулисану зону државног власништва.<br><strong>Црна боја</strong> означава конфисковано власништво житеља.<br><strong>Бела боја</strong> означава државно власништво.<br>",
    "<strong style='text-decoration: underline;'>Тренутан приказ мапе - Квадрант мапа (Висока резолуција)</strong>",
    ];

    x.innerHTML = text[number];
    if (number==0) {
        document.getElementById("KatastarIMG").src = "../../img/Pages/Katastar/EmptyMapFullRes.png"
    } else if (number==1) {
        document.getElementById("KatastarIMG").src = "../../img/Pages/Katastar/DrawnMapFullRes.png"
    } else if (number==2) {
        document.getElementById("KatastarIMG").src = "../../img/Pages/Katastar/CoordMapFullRes.png"
    }
}

function DisplayLowResMap(number) {
    var x = document.getElementById("ToolTip");
    const text = [
    "<strong style='text-decoration: underline;'>Тренутан приказ мапе - Празна мапа (Ниска резолуција)</strong>",
    "<strong style='text-decoration: underline;'>Тренутан приказ мапе - Исцртана мапа (Ниска резолуција)</strong><br><br><span style='color: yellow; background-color: #444;'><strong>Жута боја</strong></span> означава регулисану зону државног власништва.<br><strong>Црна боја</strong> означава конфисковано власништво житеља.<br><strong>Бела боја</strong> означава државно власништво.<br>",
    "<strong style='text-decoration: underline;'>Тренутан приказ мапе - Квадрант мапа (Ниска резолуција)</strong>",
    ];

    x.innerHTML = text[number];
    if (number==0) {
        document.getElementById("KatastarIMG").src = "../../img/Pages/Katastar/EmptyMapFullRes_compressed.jpg"
    } else if (number==1) {
        document.getElementById("KatastarIMG").src = "../../img/Pages/Katastar/DrawnMapFullRes_compressed.jpg"
    } else if (number==2) {
        document.getElementById("KatastarIMG").src = "../../img/Pages/Katastar/CoordMapFullRes_compressed.jpg"
    }
}

function ShowInteractiveMap() {
    window.open("../e_zitelj/Output/unmined.index.html", "tvoja mama", 'width=auto, height=auto');
}

function ShowFullMap() {
    var x = document.getElementById("KatastarIMGMapBlock");
    x.classList.toggle('KatastarIMGMapBlockEdited');
}

// var z, zoom;
// function jsZoom() {
//     z = document.getElementById("myRangeZ").value;
//     img = document.getElementById("KatastarIMG");
//     if (!img.dataset.width) {
//       img.dataset.width = img.width;
//       img.dataset.height = img.height;
//     }
    
//     const width = +img.dataset.width;
//     const height = +img.dataset.height;
    
//     img.style.width = (width * z/20 + width) + "px";
//     img.style.height = (height * z/20 + height) + "px";    
// }