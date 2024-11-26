import { I_InputProps } from './index.types';

const Input: React.FC<I_InputProps> = ({
  fieldName,
  field,
  register,
  fieldErrorClass,
}) => {
  const {
    tag = 'input',
    type,
    hidden = false,
    step = null,
    isRequired = true,
    pattern = undefined,
  } = field;
  const Tag: keyof JSX.IntrinsicElements = tag;
  return (
    <Tag
      id={fieldName}
      type={type}
      step={step}
      className={`sg-library__${tag}  ${hidden && ' hidden'} ${fieldErrorClass(
        fieldName
      )}`}
      {...register(fieldName, {
        required: isRequired,
        pattern: pattern,
      })}
    />
  );
};

export default Input;
