const pianoKeys = document.querySelectorAll(".piano-keys .key"),
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckbox = document.querySelector(".keys-checkbox input"),
      instrumentSelect = document.createElement("select");


const instruments = ["piano", "guitar", "violin"];
instruments.forEach(instr => {
    const option = document.createElement("option");
    option.value = instr;
    option.textContent = instr.charAt(0).toUpperCase() + instr.slice(1);
    instrumentSelect.appendChild(option);
});

let allKeys = [],
    currentInstrument = instruments[0];

const playTune = (key) => {
    const audio = new Audio(`notes/${currentInstrument}/${key}.wav`);
    audio.volume = volumeSlider.value;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => clickedKey.classList.remove("active"), 150);
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    document.querySelectorAll("audio").forEach(audio => {
        audio.volume = e.target.value;
    });
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
};

const changeInstrument = (e) => {
    currentInstrument = e.target.value;
};

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
instrumentSelect.addEventListener("change", changeInstrument);
