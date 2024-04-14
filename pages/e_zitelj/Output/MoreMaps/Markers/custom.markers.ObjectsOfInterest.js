/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {
    isEnabled: true,
    markers: [
        {
            x: -393,
            z: -596,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Лука Пашалук",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        },
        {
            x: -35,
            z: -160,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Главна Жележничка Станица",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        },
        {
            x: -270,
            z: -300,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Архива Пашалука",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        },
        {
            x: -200,
            z: -190,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Лука Стражара Пашалука",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        },
        {
            x: -1100,
            z: 320,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Аеродром 'Слобода Пашалука'",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        },
        {
            x: -774,
            z: -209,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Спаљено Село",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        },
        {
            x: -315,
            z: 120,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Бановано Брдо",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        },
        {
            x: -101,
            z: -4,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Споменик НАТО Агресије",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        },
        {
            x: -128,
            z: -110,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Спомен Парк 'Хероји Пашалука'",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        },
        {
            x: -440,
            z: 775,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "West 65",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        },
        {
            x: -70,
            z: -320,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Плажа 'Хевнз Бич'",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        },
        {
            x: -23,
            z: -44,
            image: "objects.of.interest.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Споменик НАТО Агресије На Воз 393",
            textColor: "white",
            textBackgroundColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 15px Montserrat,sans serif",
        }
    ]
}
