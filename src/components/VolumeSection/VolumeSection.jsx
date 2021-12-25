import {useEffect} from 'react';
import Display from "../Display";
import addClassTemp from "../../utils/addClassTemp";
import "./VolumeSection.css";
import "../../styles/GeneralStyles.css";

const VolumeSection = ({ setVolume, volume }) => {
    const text = `Volumen: ${Math.trunc(Number.parseFloat(volume)*100)}%`;
    
    useEffect(()=>{
      const element = document.querySelector(".vol");
      addClassTemp(element, "activeWrite", 250);
    },[volume]);
    
    return(
      <>
        <input 
          type="range" 
          id="volume" 
          min="0" max="1" 
          step="0.01" 
          defaultValue="0.5"
          onChange={e => setVolume(e.target.value)} 
          />
        <Display text={ text } classes="vol"/>
        </>
    );
}

export default VolumeSection;