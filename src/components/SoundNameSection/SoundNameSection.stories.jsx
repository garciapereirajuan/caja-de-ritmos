import SoundNameSection from "../SoundNameSection";
import "../../App.css";

export default {
    title: "SoundNameSection",
    component: SoundNameSection,
    argTypes: {
        name: {
            options: ["Sound name 1", "Sound name 2", "Sound name 3"],
            control: { type: "radio" }
        }
    }
}

const Template = (args) => (
    <div class="border-section">
        <SoundNameSection name={args.name} />
    </div>
);

export const SoundNameSectionExample = Template.bind({});