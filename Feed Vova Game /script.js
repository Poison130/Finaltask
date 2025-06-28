let xp = 0;
let level = 1;
let requiredXP = 10;

const progressFill = document.getElementById("progressFill");
const xpText = document.getElementById("xpText");
const levelText = document.getElementById("level");
const feedBtn = document.getElementById("feedBtn");

const foodImages = ["Flashiki.png", "Sloyechka.png", "AmericanBurger.png" ];
const musicTracks = ["music1.mp3", "music2.mp3", "music3.mp3", "music4.mp3", "music5.mp3"];
let currentTrackIndex = 0;
const bgm = document.getElementById("bgm");

function updateProgress() {
  const percent = (xp / requiredXP) * 100;
  progressFill.style.width = percent + "%";
  xpText.textContent = `${xp}/${requiredXP}`;

let red, green;

if (percent < 65) {
  // от красного (220,0,0) к тёпло-жёлтому (220,200,0)
  const t = percent / 65; // 0.0 – 1.0
  red = 220;
  green = Math.round(200 * t); // от 0 до 200
} else {
  // от жёлтого (220,200,0) к тёмно-зелёному (0,160,0)
  const t = (percent - 65) / 35; // 0.0 – 1.0
  red = Math.round(220 * (1 - t)); // от 220 к 0
  green = Math.round(200 + (160 - 200) * t); // от 200 к 160
}

const color = `rgb(${red}, ${green}, 0)`;
progressFill.style.backgroundColor = color;


}

function levelUp() {
  level++;
  xp = 0;
  requiredXP = level * 10 + (level - 1) * 10;
  levelText.textContent = level;
  spawnFoodParticles();
  updateProgress();
}

function spawnFoodParticles() {
  for (let i = 0; i < 200; i++) {
    const img = document.createElement("img");
    img.src = `pictures/${foodImages[Math.floor(Math.random() * foodImages.length)]}`;
    img.classList.add("food-particle");

    // Случайный размер
    const size = Math.random() * 30 + 20;
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;

    // Случайная позиция
    img.style.left = Math.random() * 100 + "vw";
    img.style.top = (Math.random() * 1000 - 1000) + "px"; // выше экрана

    // Случайный угол + скорость вращения
    const rotation = Math.random() * 360;
    const rotateSpeed = (Math.random() * 2 + 1).toFixed(2);
    img.style.transform = `rotate(${rotation}deg)`;
    img.style.animation = `fall 2.8s linear forwards, spin ${rotateSpeed}s linear infinite`;

    document.body.appendChild(img);

    setTimeout(() => img.remove(), 2000);
  }
}

feedBtn.addEventListener("click", () => {
  xp++;
  if (xp >= requiredXP) {
    levelUp();
  }
  updateProgress();
});

// Музыка
function playNextTrack() {
  bgm.src = `assets/${musicTracks[currentTrackIndex]}`;
  bgm.play();
  currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
}

bgm.addEventListener("ended", playNextTrack);
playNextTrack();

