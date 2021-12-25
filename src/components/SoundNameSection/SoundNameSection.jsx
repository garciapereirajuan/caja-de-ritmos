import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Display from '../Display';
import addClassTemp from '../../utils/addClassTemp';
import "../../styles/GeneralStyles.css";

const SoundNameSection = ({ name }) => {
    
    useEffect(()=>{
      const element = document.querySelector(".name");
      addClassTemp(element, "activeWrite", 250);
    },[name]);
   
    return(
      <Grid item container justifyContent="center">
        <h3>Sonido</h3>
        <Display text={ name } classes="name"/>
      </Grid>
    );
}

export default SoundNameSection;