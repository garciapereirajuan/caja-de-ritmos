import Grid from '@material-ui/core/Grid';
import DrumsMachine from './components/DrumsMachine'; 
import './styles/GeneralStyles.css'
import './App.css'

const App = () => {

  return(
    <Grid container className="AppCajaDeRitmos" 
      justifyContent="center" alignItems="center"
      >
       <DrumsMachine />
    </Grid>
  );
}

export default App;