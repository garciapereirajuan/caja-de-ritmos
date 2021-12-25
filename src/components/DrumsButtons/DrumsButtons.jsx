import React from 'react';
import Grid from '@material-ui/core/Grid';
import DrumsButtonsItem from '../DrumsButtonsItem';
import "../../styles/GeneralStyles.css";

const DrumsButtons = ({actualCapSound, setName, volume}) => {
    return(
      <Grid item container data-testid="DrumsButtons" 
        id="DrumsButtons" justifyContent="space-around"
      >  
        {
          actualCapSound.map(item => {
            return (
              <React.Fragment key={item.id}>
                <DrumsButtonsItem 
                  urlAudio={item.url} 
                  idContainer={item.id} 
                  text={item.text}
                  name={item.name}
                  setName={setName}
                  volume={volume}
                  keyCode={item.keyCode}
                  />
              </React.Fragment>
            );
          })
        }
      </Grid>
    );
}

export default DrumsButtons;