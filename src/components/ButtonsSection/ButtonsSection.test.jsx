import ButtonsSection from '../ButtonsSection';
import {render} from '@testing-library/react';
import { firstCap } from '../../utils/dataSounds';

test("Render testid DrumsButtons (son of ButtonsSection)", async()=>{
    const {findByTestId} = render( 
        <ButtonsSection 
        capSound={firstCap} 
        keyDown={()=>{}} 
        setName={()=>{}} 
        volume=".5" /> 
    );
    await findByTestId("DrumsButtons");
});