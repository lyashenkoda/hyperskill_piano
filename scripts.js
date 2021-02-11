const whiteKeyCodes = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"];
const blackKeyCodes = ["KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];
const COLOR_WHITE = "white";
const COLOR_BLACK = "black";


function returnAudioFile (keyPressed, color) {
    const keyPressedUppercased = keyPressed.toString().toUpperCase();
    return new Audio(`${color}_keys/${keyPressedUppercased}.mp3`);
};

document.addEventListener("keydown", function(event) {
    if (whiteKeyCodes.includes(event.code)) {
        let audio = returnAudioFile(event.key, COLOR_WHITE);
        audio.play();
    } else if (blackKeyCodes.includes(event.code))  {
        let audio = returnAudioFile(event.key, COLOR_BLACK);
        audio.play();
    } else {
        console.log("Warning: use ASDFGHJ keys");
    }
});