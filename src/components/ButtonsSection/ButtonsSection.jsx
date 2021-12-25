import DrumsButtons from '../DrumsButtons';

const ButtonsSection = ({ capSound, keyDown, setName, volume }) =>{
    return(
      <DrumsButtons 
        actualCapSound={capSound} 
        keyDown={keyDown} 
        setName={setName} volume={volume}/>
    );
} 

export default ButtonsSection;