import CapSection from '../CapSection';

const firstCap = {};
const styleRetro = false;

export default {
    title: "CapSection",
    component: CapSection
}

export const CapSectionExample = () => (      
    <div class="container-controls border-section">   
        <CapSection 
            capSound={firstCap} setCapSound={()=> {}} 
            styleRetro={styleRetro} setStyleRetro={()=> {}} 
        />
    </div>
);