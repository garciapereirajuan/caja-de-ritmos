import Display from '../Display';

export default {
    title: "Display",
    component: Display,
    argTypes: {
        classes: {
            options: ["activeWrite"],
            control: { type: "check" }
        }
    }
};

const Template = (args) => {
   return <Display text={args.text} classes={`${args.classes} cap`} />
}

export const DisplayExample = Template.bind({});
DisplayExample.args = {
    text: "sound name",

}
