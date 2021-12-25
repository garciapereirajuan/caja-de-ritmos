import VolumeSection from '../VolumeSection';
import {render} from '@testing-library/react';

test(" Element with 'display' testid must contain the text = Volumen: 50%_ ", async()=>{
    const {findByTestId} = render( <VolumeSection setVolume={()=>{}} volume="0.5" /> );
    const item = await findByTestId("display");
    expect(item).toHaveTextContent("Volumen: 50%_");
});

test(" Element with 'write' testid must contain the 'vol' class", async()=>{
    const {findByTestId} = render( <VolumeSection setVolume={()=>{}} volume="0.5" /> );
    const item = await findByTestId("write");
    expect(item).toHaveClass("vol");
});