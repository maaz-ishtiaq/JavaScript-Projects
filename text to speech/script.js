// Select elements4
const textarea = document.querySelector("textarea")
const voiceList = document.querySelector("select");
const speakBtn = document.querySelector("button");

let synth = window.speechSynthesis;
let voices = [];

// Load and populate voice options
function loadVoices() {
    voices = synth.getVoices();
    voiceList.innerHTML = ""; // Clear old options

    voices.forEach((voice, index) => {
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = index;
        voiceList.appendChild(option);
    });
}

// Handle speech
function speakText() {
    const text = textarea.value;
    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoice = voices[voiceList.value];
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    synth.speak(utterance);
}

// Event Listeners
speakBtn.addEventListener("click", speakText);
window.speechSynthesis.onvoiceschanged = loadVoices;
window.addEventListener("load", loadVoices);
