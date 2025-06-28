let audioContext = null;
let isStarted = false;

const instruments = [
  {
    id: 'track1',
    btnId: 'btn1',
    panId: 'pan1',
    file: 'sounds/Kick1.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track2',
    btnId: 'btn2',
    panId: 'pan2',
    file: 'sounds/Kick2.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track3',
    btnId: 'btn3',
    panId: 'pan3',
    file: 'sounds/Snap.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track4',
    btnId: 'btn4',
    panId: 'pan4',
    file: 'sounds/Snare.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track5',
    btnId: 'btn5',
    panId: 'pan5',
    file: 'sounds/Snare2.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track6',
    btnId: 'btn6',
    panId: 'pan6',
    file: 'sounds/HiHat1.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track7',
    btnId: 'btn7',
    panId: 'pan7',
    file: 'sounds/HiHat2.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track8',
    btnId: 'btn8',
    panId: 'pan8',
    file: 'sounds/Rim.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track9',
    btnId: 'btn9',
    panId: 'pan9',
    file: 'sounds/Triangle.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track10',
    btnId: 'btn10',
    panId: 'pan10',
    file: 'sounds/Bass.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track11',
    btnId: 'btn11',
    panId: 'pan11',
    file: 'sounds/Synth.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track12',
    btnId: 'btn12',
    panId: 'pan12',
    file: 'sounds/Synth2.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track13',
    btnId: 'btn13',
    panId: 'pan13',
    file: 'sounds/808.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track14',
    btnId: 'btn14',
    panId: 'pan14',
    file: 'sounds/Flute.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track15',
    btnId: 'btn15',
    panId: 'pan15',
    file: 'sounds/Vocal.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track16',
    btnId: 'btn16',
    panId: 'pan16',
    file: 'sounds/riser.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track17',
    btnId: 'btn17',
    panId: 'pan17',
    file: 'sounds/crash.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track18',
    btnId: 'btn18',
    panId: 'pan18',
    file: 'sounds/Fx.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track19',
    btnId: 'btn19',
    panId: 'pan19',
    file: 'sounds/FxOwl.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  },
  {
    id: 'track20',
    btnId: 'btn20',
    panId: 'pan20',
    file: 'sounds/Lead.mp3',
    audio: null,
    source: null,
    panner: null,
    analyser: null,
    volume: 0
  }
];

// Создание и запуск аудио для всех инструментов
function startAllInstruments() {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();

  instruments.forEach(inst => {
    const audio = new Audio(inst.file);
    audio.loop = true;
    audio.volume = 0;

    const source = audioContext.createMediaElementSource(audio);
    const panner = audioContext.createStereoPanner();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;

    source.connect(panner).connect(analyser).connect(audioContext.destination);

    inst.audio = audio;
    inst.source = source;
    inst.panner = panner;
    inst.analyser = analyser;

    audio.play();
  });

  isStarted = true;
}

// Обработчик включения инструмента
function toggleInstrument(inst, trackElem, btnElem) {
  if (inst.audio.volume === 0) {
    inst.audio.volume = 1;
    btnElem.textContent = 'Выкл';
    btnElem.classList.add('active');
    trackElem.classList.add('active');
  } else {
    inst.audio.volume = 0;
    btnElem.textContent = 'Вкл';
    btnElem.classList.remove('active');
    trackElem.classList.remove('active');
  }
}

// Инициализация кнопок и ползунков
instruments.forEach(inst => {
  const trackElem = document.getElementById(inst.id);
  const btnElem = document.getElementById(inst.btnId);
  const panSlider = document.getElementById(inst.panId);

  btnElem.addEventListener('click', async () => {
    if (!isStarted) {
      startAllInstruments();
    }

    toggleInstrument(inst, trackElem, btnElem);
  });

  panSlider.addEventListener('input', () => {
    if (inst.panner) {
      inst.panner.pan.value = panSlider.value;
    }
  });
});

// Визуализация
const canvas = document.getElementById('visualizer');
const canvasCtx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bufferLength = 256;
const dataArray = new Uint8Array(bufferLength);

let smoothData = new Float32Array(512);
let lastTime = 0;

function drawVisualizer(time) {
  requestAnimationFrame(drawVisualizer);

  const deltaTime = time - lastTime;
  lastTime = time;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const baseRadius = Math.min(canvas.width, canvas.height) / 2.6;
  const points = 128;
  const angleStep = (Math.PI * 2) / points;

  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

  const combinedData = new Uint8Array(points);
  const tempData = new Uint8Array(points);

  instruments.forEach(inst => {
    if (inst.audio && inst.audio.volume > 0 && inst.analyser) {
      inst.analyser.getByteFrequencyData(tempData);
      for (let i = 0; i < points; i++) {
        // Равномерное распределение частот по всем точкам
        const srcIndex = Math.floor((i / points) * tempData.length);
        combinedData[i] = Math.max(combinedData[i], tempData[srcIndex]);
      }
    }
  });

  const smoothingFactor = 0.6;
  for (let i = 0; i < points; i++) {
    smoothData[i] = smoothingFactor * smoothData[i] + (1 - smoothingFactor) * combinedData[i];
  }

  const rotation = time * 0.001;
  const pulse = Math.sin(time * 0.005) * 0;
  const dynamicRadius = baseRadius + pulse;
  const maxDistortion = 120;

  // Основной контур - разделен на две симметричные половинки
  canvasCtx.beginPath();
  for (let i = 0; i < points; i++) {
    const angle = i * angleStep + rotation;
    // Симметричное отражение для второй половинки
    const mirroredIndex = (i < points/2) ? i : points - i - 1;
    const distortion = (smoothData[mirroredIndex] / 255) ** 2 * maxDistortion;
    const radius = dynamicRadius + distortion;

    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    i === 0 ? canvasCtx.moveTo(x, y) : canvasCtx.lineTo(x, y);
  }
  canvasCtx.closePath();

  const hue = (time / 30) % 360;
  const gradient = canvasCtx.createRadialGradient(
    centerX, centerY, dynamicRadius * 0.5,
    centerX, centerY, dynamicRadius * 1.5
  );
  gradient.addColorStop(0, `hsl(${hue}, 100%, 60%)`);
  gradient.addColorStop(1, `hsl(${(hue + 120) % 360}, 100%, 30%)`);

  canvasCtx.strokeStyle = gradient;
  canvasCtx.lineWidth = 6;
  canvasCtx.shadowColor = `hsl(${hue}, 100%, 50%)`;
  canvasCtx.shadowBlur = 60;
  canvasCtx.stroke();

  // Внутренние слои
  for (let layer = 0; layer < 5; layer++) {
    canvasCtx.beginPath();
    for (let i = 0; i < points; i++) {
      const angle = i * angleStep + rotation;
      // Симметричное отражение для второй половинки
      const mirroredIndex = (i < points/2) ? i : points - i - 1;
      const distortion = (smoothData[mirroredIndex] / 255 * maxDistortion) * 0.6;
      const radius = dynamicRadius * (0.3 + 0.7 * layer / 5) + distortion;

      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      i === 0 ? canvasCtx.moveTo(x, y) : canvasCtx.lineTo(x, y);
    }
    canvasCtx.closePath();
    canvasCtx.strokeStyle = `hsla(${(hue + layer * 30) % 360}, 80%, 60%, ${0.2 + 0.2 * layer})`;
    canvasCtx.lineWidth = 2;
    canvasCtx.stroke();
  }

  // Центральный круг
  canvasCtx.beginPath();
  canvasCtx.arc(centerX, centerY, dynamicRadius * 0.2, 0, Math.PI * 2);
  canvasCtx.fillStyle = `hsla(${hue}, 100%, 70%, 0.3)`;
  canvasCtx.fill();
}
drawVisualizer();

document.getElementById('exitBtn').addEventListener('click', () => {
  // Остановить все звуки
  instruments.forEach(inst => {
    if (inst.audio) {
      inst.audio.pause();
      inst.audio.currentTime = 0;
    }
  });
  
  // Закрыть аудиоконтекст
  if (audioContext) {
    audioContext.close().then(() => {
      audioContext = null;
      isStarted = false;
    });
  }
});