import React from 'react';
import Button from '..';

const Template = (args) => <Button {...args}>Button</Button>;

// Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
};

export default {
  title: 'MyButton',
  component: Button,
}
