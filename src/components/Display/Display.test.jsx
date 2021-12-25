import Display from '../Display';
import {render} from '@testing-library/react';

test("Render testid display", async()=>{
    const {findByTestId} = render( <Display text="sound name" classes="cap" /> );
    const item = await findByTestId(/display/i);
    expect(item).toHaveTextContent("sound name");
});

test("The '.write' testid must contain a class with the value of the .classes attribute", async()=>{
    const {findByTestId} = render ( <Display text="sound name" classes="cap" /> );
    const item = await findByTestId(/write/i);
    expect(item).toHaveClass("cap");
});