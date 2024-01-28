//Change with random text
function RandomText() {
    const RandText = [
      "<span style='color:#AAAAAA'>Јебем ти ове телескопике усране!</span>",
      "<span style='color:#AAAAAA'>Имаш пљугу бурице?</span>",
      "<span style='color:#AAAAAA'>Мрзимо мањине!</span>",
      "<span style='color:#AAAAAA'>Твоја мама!</span>"
    ]
    var RNG = Math.floor(Math.random()*RandText.length);
    el = document.querySelector('.random-textbf')
    el.innerHTML = RandText[RNG];
  }
setInterval(RandomText, 3100);