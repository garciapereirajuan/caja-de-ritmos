import addClassTemp from './addClassTemp';

export const audioStart = (audioElement, volume) => {
    audioElement.volume = volume;
    audioElement.play();
};

export const playAudio = (text, name, setName, volume) => {
    const audioElement = document.querySelector(`#${text}`);
    addClassTemp(audioElement.parentNode, "select", 100);
    audioStart(audioElement, volume);
    audioElement.currentTime = 0;
    setName(name);
}
