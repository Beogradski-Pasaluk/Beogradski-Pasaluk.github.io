//Change with random text
function RandomText() {
    const RandText = [
        "<span style='color:#AAAAAA'>Београде збогом ово ти још нисам рекао</span>",
        "<span style='color:#AAAAAA'>Заједно смо лепши, заједно смо јачи. То другарство значи</span>",
        "<span style='color:#AAAAAA'>Замисли живиш даље од последње станице ноћног превоза</span>",
        "<span style='color:#AAAAAA'>Негујмо српски језик и ћирилицу</span>",
        "<span style='color:#AAAAAA'>Цезар ради шпагу</span>",
        "<span style='color:#AAAAAA'>Када пада киша, блато је</span>",
        "<span style='color:#AAAAAA'>Када пада снег, лед је</span>",
        "<span style='color:#AAAAAA'>Сува је мокра вода</span>",
        "<span style='color:#AAAAAA'>Ја мислим да нема Бибе Струје, ти не би имао ни Бибу ни Струју</span>",
        "<span style='color:#AAAAAA'>Правим нови реалм у Бољевцима</span>",
        "<span style='color:#AAAAAA'>Ти рече да си не ћеш да си дошао</span>",
        "<span style='color:#AAAAAA'>С обзиром на то колико сам Екомера попио, појео сам више ајкула него ти</span>",
        "<span style='color:#AAAAAA'>Чоколино ти даје дубину док једеш</span>",
        "<span style='color:#AAAAAA'>Дигни круну краљу спада ти глава</span>",
        "<span style='color:#AAAAAA'>Бубе су нерфоване једино тиме што су мале<br>Замисли дође ти комарац величине кера</span>",
        "<span style='color:#AAAAAA'>Шта је то црвено и лоше за твоје зубе? <br>Цигла</span>",
        "<span style='color:#AAAAAA'>Ако је множина од плућа, плућа, зашто једнина није плућ?</span>",
        "<span style='color:#AAAAAA'>Дуећ лерне а један ганзерферн ауф деутућ никос лајк деутућ ленер мит видеос унтитерије</span>",
        "<span style='color:#AAAAAA'>Кад паднеш низ Гајићеве степенице може се рећи да си устао на леву ногу</span>",
        "<span style='color:#AAAAAA'>Оно када када бојлер</span>",
        "<span style='color:#AAAAAA'>Ја не могу да верујем да сам ја</span>",
        "<span style='color:#AAAAAA'>Шта сам ја сад урадио ово овде кад ово ништа не ваља</span>",
    ]
    var RNG = Math.floor(Math.random()*RandText.length);
    el = document.querySelector('.random-text')
    el.innerHTML = RandText[RNG];
  }
setInterval(RandomText, 3500);