let phrases = [
  {
    text: "send the lol gif to friend",
    image: "https://code.s3.yandex.net/web-code/procrastinate/1.gif",
  },
  {
    text: "look at the dicsount on aircrafts",
    image: "https://code.s3.yandex.net/web-code/procrastinate/2.png",
  },
  {
    text: "analyze Eminem songs",
    image: "https://code.s3.yandex.net/web-code/procrastinate/3.png",
  },
  {
    text: "JOOOHN CIIINAA",
    image: "https://code.s3.yandex.net/web-code/procrastinate/4.png",
  },
  {
    text: "watch on your library",
    image: "https://code.s3.yandex.net/web-code/procrastinate/5.png",
  },
  {
    text: "read the articles about San Francisco",
    image: "https://code.s3.yandex.net/web-code/procrastinate/6.png",
  },
  {
    text: "spend time on publics",
    image: "https://code.s3.yandex.net/web-code/procrastinate/7.png",
  },
  {
    text: "sing songs",
    image: "https://code.s3.yandex.net/web-code/procrastinate/8.png",
  },
  {
    text: "watch a movie",
    image: "https://code.s3.yandex.net/web-code/procrastinate/9.png",
  },
  {
    text: "check out all messengers",
    image: "https://code.s3.yandex.net/web-code/procrastinate/10.png",
  },
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector(".button");
let phrase = document.querySelector(".phrase");
let advice = document.querySelector(".advice");
let image = document.querySelector(".image");

button.addEventListener("click", function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, "textContent", randomElement.text);
  smoothly(image, "src", randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = "33px";
  } else {
    advice.style.fontSize = "42px";
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, "textContent", phrases[i].text);
  smoothly(image, "src", phrases[i].image);
}
