import SoundNameSection from "../SoundNameSection";
import {render} from '@testing-library/react';

test("Must render a heading", async()=>{
    const {findByRole} = render( <SoundNameSection name="The sound name" /> );
    const h3 = await findByRole("heading");
    expect(h3).toHaveTextContent("Sonido");
});

test("Must render a child with testid 'display'", async()=>{
    const {findByTestId} = render( <SoundNameSection name="The sound name" /> );
    await findByTestId("display");
});