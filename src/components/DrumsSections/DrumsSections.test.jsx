import DrumsSections from '../DrumsSections';
import {render} from '@testing-library/react';
import {firstCap} from '../../utils/dataSounds';

test("Render testid drums-sections", async()=>{
    const {findByTestId} = render( <DrumsSections capSound={firstCap} /> );
    await findByTestId("drums-sections");
});

test("Render testid drums-sections", async()=>{
    const {getAllByTestId} = render( <DrumsSections capSound={firstCap} /> );
    const childs = await getAllByTestId("child-drums-sections");
    expect(childs).toHaveLength(5);
});
