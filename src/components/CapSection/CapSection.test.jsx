import CapSection from '../CapSection';
import {render} from '@testing-library/react';

const firstCap = {}

test("Must render a element with testid btns-cap-section", async()=>{
    const {findByTestId} = render( 
        <CapSection 
            capSound={firstCap} setCapSound={()=>{}} 
            styleRetro={false} setStyleRetro={()=>{}} 
        /> 
    );
    await findByTestId("btns-cap-section");
});

test("Must render a element with testid display", async()=>{
    const {findByTestId} = render(
        <CapSection 
            capSound={firstCap} setCapSound={()=>{}} 
            styleRetro={false} setStyleRetro={()=>{}} 
        /> 
    );
    await findByTestId("display");
});