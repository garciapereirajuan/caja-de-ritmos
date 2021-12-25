import Grid from '@material-ui/core/Grid';
import "./Display.css";
import "../../styles/GeneralStyles.css";

const Display = ({ text, classes }) => {
    return(
      <Grid item container id="display" className="display"  
        data-testid="display" alignItems="center" justifyContent="center"
        xs={12}
       >
        <span className="sound-name">{text}
          <span className="chart">_</span>
          <span data-testid="write" className={`write ${classes}`}></span>
        </span>  
      </Grid>
    );
}

export default Display;