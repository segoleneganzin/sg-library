import PropTypes from 'prop-types';

/**
 * OtherField component renders a form field based on the provided configuration.
 * input, textarea
 *
 * @param {Object} props - The properties object.
 * @param {string} props.fieldName - The name of the field.
 * @param {Object} props.field - The configuration object for the field.
 * @param {function} props.register - The register function from useForm hook.
 * @param {function} props.fieldErrorClass - The function to get the error class for a given field.
 * @param {function} props.handleChange
 * @returns {JSX.Element} - The JSX element for the form field.
 */
const OtherField = ({
  fieldName,
  field,
  register,
  fieldErrorClass,
  handleChange,
}) => {
  const {
    tag = 'input',
    type,
    hidden = false,
    step = null,
    fieldClass = '',
    isRequired = true,
    pattern = null,
  } = field;
  const Tag = tag;
  return (
    <Tag
      id={fieldName}
      name={fieldName}
      type={type}
      step={step}
      className={`sg-form-lib__${tag} ${fieldClass}  ${
        hidden && ' hidden'
      } ${fieldErrorClass(fieldName)}`}
      {...register(fieldName, {
        required: isRequired,
        pattern: pattern,
        onChange: (e) => {
          if (handleChange) {
            handleChange(e);
          }
        },
      })}
    />
  );
};

OtherField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  field: PropTypes.shape({
    tag: PropTypes.string,
    type: PropTypes.string.isRequired,
    hidden: PropTypes.bool,
    step: PropTypes.number,
    fieldClass: PropTypes.string,
    isRequired: PropTypes.bool,
    pattern: PropTypes.instanceOf(RegExp),
  }).isRequired,
  register: PropTypes.func.isRequired,
  fieldErrorClass: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
};

export default OtherField;
