import {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {FaExchangeAlt, FaGift} from 'react-icons/fa';
import {SiRetroarch} from 'react-icons/si';
import Display from '../Display';
import {firstCap, secondCap} from '../../utils/dataSounds';
import addClassTemp from '../../utils/addClassTemp';
import '../../styles/GeneralStyles.css';

const CapSection = ({ capSound, setCapSound, styleRetro, setStyleRetro }) => {
    const text = capSound === firstCap 
      ? "Sonidos #1" 
      : "Sonidos #2";
    const capType = capSound === firstCap 
      ? secondCap 
      : firstCap;
    const iconBtnChange = <FaExchangeAlt size={".7em"} />;
    const iconBtnRetro = <SiRetroarch size={"1em"} />;
    const iconBtnGift = <FaGift size={".9em"} />
    
    useEffect(()=>{
      const element = document.querySelector(".cap");
      addClassTemp(element, "activeWrite", 250);
    },[capSound]);
    
    return(
      <>
        <Grid item container justifyContent="space-around" 
          className="btns-cap-section" data-testid="btns-cap-section">
          <Button variant="contained" className="btn-cap" 
            endIcon={ iconBtnChange }
            onClick={ ()=> setCapSound(capType) }
            >
            <span className="btn-uppercase">T</span>ipos de sonidos
          </Button>
          <IconButton id="btn-retro"
            onClick={ ()=> setStyleRetro(!styleRetro) }>
            {(!styleRetro && iconBtnGift) || iconBtnRetro}
          </IconButton>
        </Grid>
        <Display text={ text } 
          classes="cap" />  
      </>
    );
}

export default CapSection;