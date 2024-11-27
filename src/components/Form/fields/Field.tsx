import React from 'react';
import Select from './Select';
import Textarea from './Textarea';
import CheckField from './CheckField';
import Input from './Input';
import { I_Field } from '../../../utils/generalTypes';

interface I_FieldProps {
  field: I_Field;
  commonProps: any;
}

const Field: React.FC<I_FieldProps> = ({ field, commonProps }) => {
  const componentMapping: { [key: string]: React.ElementType } = {
    select: Select,
    textarea: Textarea,
    input: Input,
  };

  const Component = componentMapping[field.tag];

  return field?.type === 'checkbox' || field?.type === 'radio' ? (
    <CheckField {...commonProps} />
  ) : (
    <Component {...commonProps} />
  );
};

export default Field;
