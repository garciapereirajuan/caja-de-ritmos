import Grid from '@material-ui/core/Grid';
import TitleSection from '../TitleSection';
import ButtonsSection from '../ButtonsSection';
import SoundNameSection from '../SoundNameSection';
import CapSection from '../CapSection';
import VolumeSection from '../VolumeSection';
import "../../styles/GeneralStyles.css";

const DrumsSections = ({ setVolume, volume, setCapSound, capSound, 
    setName, name, keyDown, styleRetro, setStyleRetro}) =>{
    
    return(
      <Grid item container className="container-controls" data-testid="drums-sections"
        justifyContent="center" spacing={1}
       >
        <Grid item container xs={12} className="border-section title" data-testid="child-drums-sections" >
          <TitleSection />
        </Grid>
        <Grid item container xs={12} sm={7} md={7} 
          justifyContent="center" data-testid="child-drums-sections"
          >
          <ButtonsSection 
            capSound={capSound} 
            keyDown={keyDown} 
            setName={setName} 
            volume={volume}
           />
        </Grid>
        <Grid item container xs={12} sm={5} md={5} 
          alignItems="center" spacing={2}
          >
          <Grid item container className="border-section" data-testid="child-drums-sections">
            <SoundNameSection name={name} />
          </Grid>
          <Grid item container className="border-section" 
            justifyContent="center" data-testid="child-drums-sections"
            >
            <CapSection capSound={capSound} setCapSound={setCapSound} 
              styleRetro={styleRetro} setStyleRetro={setStyleRetro}
              />
          </Grid>
          <Grid item container className="border-section" 
            justifyContent="center" data-testid="child-drums-sections"
            >
            <VolumeSection volume={volume} setVolume={setVolume} />   
           </Grid>
        </Grid>
      </Grid>  
    );
}

export default DrumsSections;