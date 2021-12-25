import Grid from '@material-ui/core/Grid';
import './TitleSection.css';
import '../../styles/GeneralStyles.css';

const TitleSection = () => {
    return(
        <Grid item container id="title" 
          alignItems="center" justifyContent="center"
          >
          <h1>Caja de Ritmos</h1>
        </Grid>
      );
}

export default TitleSection;