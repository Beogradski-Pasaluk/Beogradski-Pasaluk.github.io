//Change with random text
function RandomText() {
    const RandText = [
        "<span style='color:#AAAAAA'>Београде збогом ово ти још нисам рекао</span>",
        "<span style='color:#AAAAAA'>Београдом крв ће лити, геј параде неће бити</span>",
        "<span style='color:#AAAAAA'>Од сада и на</span> <span style='color:#FFFF55; font-weight:bold'>Косову</span> <span style='color:#AAAAAA'>:D</span>",
        "<span style='color:#AAAAAA'>Заједно смо лепши, заједно смо јачи. То другарство значи</span>",
        "<span style='color:#AAAAAA'>Од сада са <span style='color:#AAAAAA; font-weight:bold'>10% мање</span> <span style='color:#AAAAAA'>глутена</span>",
        "<span style='color:#AAAAAA'>Кад ти неко каже <span style='color:#fff'>'хало'</span> <span style='color:#AAAAAA'>реци</span> <span style='color:#fff'>'јебем те мало'</span>",
        "<span style='color:#AAAAAA'>Кад ти неко каже <span style='color:#fff'>'дорбо вече'</span> <span style='color:#AAAAAA'>реци</span> <span style='color:#fff'>'мој ти га испече'</span>",
        "<span style='color:#AAAAAA'>Замисли живиш даље од последње станице ноћног превоза</span>",
        "<span style='color:#AAAAAA'>'Чке Београдске</span>",
        "<span style='color:#AAAAAA'>Негујмо српски језик и ћирилицу</span>"
    ]
    var RNG = Math.floor(Math.random()*RandText.length);
    el = document.querySelector('.random-text')
    el.innerHTML = RandText[RNG];
  }
setInterval(RandomText, 3500);

