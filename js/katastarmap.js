function DisplayFullResMap(number) {
    var x = document.getElementById("ToolTip");
    const text = [
        "<strong>Тренутан приказ карте - <span style='text-decoration: underline;'>Празна карта (Висока резолуција)</span></strong>",
        "<strong>Тренутан приказ карте - <span style='text-decoration: underline;'>Исцртана карта (Висока резолуција)</span></strong><br><br><span style='color: yellow; background-color: #444;'><strong>Жута боја</strong></span> означава регулисану зону државног власништва.<br><strong>Црна боја</strong> означава конфисковано власништво житеља.<br><strong>Бела боја</strong> означава државно власништво.<br>",
        "<strong>Тренутан приказ карте - <span style='text-decoration: underline;'>Квадрант карта (Висока резолуција)</span></strong>",
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
    "<strong>Тренутан приказ карте - <span style='text-decoration: underline;'>Празна карта (Ниска резолуција)</span></strong>",
    "<strong>Тренутан приказ карте - <span style='text-decoration: underline;'>Исцртана карта (Ниска резолуција)</span></strong><br><br><span style='color: yellow; background-color: #444;'><strong>Жута боја</strong></span> означава регулисану зону државног власништва.<br><strong>Црна боја</strong> означава конфисковано власништво житеља.<br><strong>Бела боја</strong> означава државно власништво.<br>",
    "<strong>Тренутан приказ карте - <span style='text-decoration: underline;'>Квадрант карта (Ниска резолуција)</span></strong>",
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

function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById('KatastarIMG');
  
    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
  
    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);
  
    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
  
    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
  
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /* Set the position of the magnifier glass: */
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
  
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

/* Execute the magnify function: */
magnify("KatastarIMG", 3);
/* Specify the id of the image, and the strength of the magnifier glass: */