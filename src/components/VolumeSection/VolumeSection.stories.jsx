import VolumeSection from '../VolumenSection';

export default {
    title: "VolumeSection",
    component: VolumeSection
}

export const VolumeSectionExample = () => (
    <div class="container-controls border-section"> 
        <VolumeSection setVolume={()=>{}} volume="0.5" />  
    </div>
);