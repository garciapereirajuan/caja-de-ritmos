import DrumsMachine from '../DrumsMachine';
import {render} from '@testing-library/react';

test("Must render 'drum-machine' testid", async()=>{
    const {findByTestId} = render( <DrumsMachine /> );
    await findByTestId("drum-machine");
});

test("Must render a child with 'drums-sections' testid", async()=>{
    const {findByTestId} = render( <DrumsMachine /> );
    await findByTestId("drums-sections");
});