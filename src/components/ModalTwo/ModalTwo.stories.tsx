import React from 'react';

import ModalTwo from './';

export default { title: 'Components', component: ModalTwo };

// component initial props
const ModalTwoProps = {};

export const ModalTwoComponent = (args: typeof ModalTwoProps) => {
  return <ModalTwo {...args} />;
};

ModalTwoComponent.args = ModalTwoProps;
