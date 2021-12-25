import {useEffect, useState, useMemo} from 'react';
import { audioStart } from '../../utils/playAudio';
import addClassTemp from '../../utils/addClassTemp';
import {firstCap, soundRetro1, soundRetro2} from '../../utils/dataSounds';
import keyDown from '../../utils/keyDown';
import DrumsSections from '../DrumsSections';
import Grid from '@material-ui/core/Grid';
import "./DrumsMachine.css";
import "../../styles/GeneralStyles.css";

const DrumsMachine = () => {
    const [ name, setName ] = useState("Presione una tecla");
    const [ capSound, setCapSound ] = useState(firstCap);
    const [ styleRetro, setStyleRetro ] = useState(false);
    const [ volume, setVolume ] = useState("0.5");
    const [ flag, setFlag ] = useState(false);
    
    const intoRetro = useMemo(()=>new Audio(soundRetro1), []);
    const outRetro = useMemo(()=>new Audio(soundRetro2), []);

    useEffect(()=>{
      const element = document.querySelector(".AppCajaDeRitmos");
      if(styleRetro){
        setFlag(true);
        addClassTemp(element, "retro", undefined);
        addClassTemp(element, "animation-retro-start", 1000);
        audioStart(intoRetro, volume);
      }
      else {
        if(flag) {
          audioStart(outRetro, volume);
          element.classList.remove("retro");
          addClassTemp(element, "animation-retro-finish", 3500);
        }
      }
    },[styleRetro, intoRetro, flag, outRetro]);
    
    return(
      <Grid item container 
        id="drum-machine"
        data-testid="drum-machine"
        justifyContent="center"
        spacing={2}
        xs={12} sm={11}
        md={8} lg={8}
        tabIndex="0" 
        onKeyDown={(e)=> keyDown(e, setName, volume, capSound)}
        >
        <DrumsSections 
          setVolume={setVolume} volume={volume} 
          setCapSound={setCapSound} capSound={capSound} 
          setName={setName} name={name} keyDown={keyDown}
          styleRetro={styleRetro} setStyleRetro={setStyleRetro}
          />
      </Grid>
    );
}

export default DrumsMachine;
  