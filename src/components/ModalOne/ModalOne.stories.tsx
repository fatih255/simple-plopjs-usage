import React from 'react';

import ModalOne from './';

export default { title: 'Components', component: ModalOne };

// component initial props
const ModalOneProps = {};

export const ModalOneComponent = (args: typeof ModalOneProps) => {
  return <ModalOne {...args} />;
};

ModalOneComponent.args = ModalOneProps;
