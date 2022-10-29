import React, { useEffect } from 'react';
import { useController } from 'react-hook-form';

import styles from './ModalTwo.module.scss';

interface ModalTwoProps {}

const ModalTwo = (props: ModalTwoProps) => {
  const { name, defaultValue, rules, ...rest } = props;

  const {
    field,
    fieldState: { invalid, isTouched },
    formState: { isValid },
  } = useController({ name, defaultValue, rules });

  useEffect(() => {
    //
  }, []);

  return <></>;
};

export default ModalTwo;
export type { ModalTwoProps };
