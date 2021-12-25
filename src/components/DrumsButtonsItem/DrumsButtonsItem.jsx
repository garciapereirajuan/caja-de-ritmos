import Grid from '@material-ui/core/Grid';
import {playAudio} from '../../utils/playAudio';
import './DrumsButtonsItem.css';
import '../../styles/GeneralStyles.css';

const DrumsButtonsItem = ({
    urlAudio, 
    idContainer, 
    text, 
    name,
    setName, 
    volume,
    keyCode}) => {
    
    return (
      <Grid item container
        alignItems="center"
        justifyContent="center"
        className="drum-pad"
        data-testid="drum-pad"
        id={idContainer}
        onClick={()=> playAudio(text, name, setName, volume)}> 
        <audio className="clip" data-testid="clip" id={text} src={urlAudio}>
          Audio isn't soported 
        </audio>
        <span className="key">{text}</span>
      </Grid>
    );
}

export default DrumsButtonsItem;