import {render} from '@testing-library/react';
import DrumsButtons from '../DrumsButtons';

const firstCap = [ 
    {
      name: "Heart 1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", 
      id: "clip-heart-1",
      text: "Q",
      keyCode: 81
    },
    {
      name: "Heart 2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      id: "clip-heart-2",
      text: "W",
      keyCode: 87
    }
]

test("Render DrumsButtons container",async()=>{
    const {getAllByTestId} = render( <DrumsButtons actualCapSound={firstCap}/> );
    const childs = await getAllByTestId("drum-pad");
    expect(childs).toHaveLength(2);
});