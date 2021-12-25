import DrumsButtonsItem from '../DrumsButtonsItem';

export default {
    title: "DrumsButtonsItem",
    component: DrumsButtonsItem
}

const data = {
    urlAudio: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    idContainer: "id",
    text: "C",
    name: "Brk Snr",
    setName: ()=>{},
    volume: ".50"
}

export const DrumsButtonsItemExample = () => <DrumsButtonsItem {...data} />