import DrumsButtons from '../DrumsButtons';
import {firstCap} from '../../utils/dataSounds';

export default {
    title: "DrumsButtons",
    component: DrumsButtons
}

export const DrumsButtonsExample = () => <DrumsButtons actualCapSound={firstCap} setName={()=>{}} volume=".5" />