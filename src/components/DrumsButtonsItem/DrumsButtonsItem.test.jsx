import { render } from '@testing-library/react';
import DrumsButtonsItem from '../DrumsButtonsItem';

test("Render drum-pad", async()=>{
    const {findAllByTestId} = render( <DrumsButtonsItem text="C"/> );
    const item = await findAllByTestId("drum-pad");
    expect(item[0]).toHaveTextContent("C");
});

test("Render audio", async()=>{
    const {findAllByTestId} = render( <DrumsButtonsItem /> );
    const item = await findAllByTestId("clip");
    expect(item[0]).toHaveClass("clip");
    expect(item[0]).toHaveTextContent("Audio isn't soported");
});
