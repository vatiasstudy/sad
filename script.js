const pages = document.querySelectorAll(".page");
let currentPage = 0;

function nextPage() {
  // remove active from current
  pages[currentPage].classList.remove("active");

  // move to next
  currentPage++;

  // safety check
  if (currentPage >= pages.length) {
    currentPage = pages.length - 1;
  }

  // add active to new page
  pages[currentPage].classList.add("active");

  // start emoji rain only on last page
  if (currentPage === pages.length - 1) {
    startEmojiRain();
  }
}

function showSad() {
  document.getElementById("sadText").innerText =
    "Main bas chahta hoon tum mujhse baat karo… silence bhi kabhi kabhi bohot dard deta hai.";
}

function startEmojiRain() {
  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.innerText = ["😔", "💔", "😢", "🥀", "🌧️", "🖤"][Math.floor(Math.random() * 6)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 3 + Math.random() * 4 + "s";
    document.body.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 7000);
  }, 200);
}
