import TitleSection from '../TitleSection';
import {render} from '@testing-library/react';

test("Render h1 title", async()=> {
    const {findByRole} = render( <TitleSection /> );
    const h1 = await findByRole("heading");
    expect(h1).toHaveTextContent(/caja de ritmos/i);
});
