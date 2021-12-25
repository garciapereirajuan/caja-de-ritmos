import {playAudio} from "./playAudio";

const keyDown = (e, setName, volume, capSound) => {
    const idElement = capSound.filter(item => item.keyCode === e.keyCode)
    if(idElement.length !== 0) {
      playAudio(idElement[0].text, idElement[0].name, setName, volume);
    }
}

export default keyDown;