import PropTypes from 'prop-types';
/**
 * CheckField component renders a set of radio buttons or checkboxes, based on the provided configuration.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.fieldName - The name of the field.
 * @param {Object} props.field - The configuration object for the field.
 * @param {function} props.register - The register function from useForm hook.
 * @param {function} props.handleChange
 * @returns {JSX.Element} - The JSX element for the set of radio buttons.
 */

const CheckField = ({ fieldName, field, register, handleChange }) => {
  const { options, type, fieldClass = ' ', isRequired = true } = field;
  return (
    <div className={`sg-form-lib__${type}s`}>
      {options.map((option, index) => {
        const { name, value, label, checked = false } = option;
        return (
          <div
            key={index}
            className={`sg-form-lib__${type} ${fieldClass}
            `}
          >
            <input
              id={name}
              name={fieldName}
              type={type}
              defaultChecked={checked || false}
              {...register(fieldName, {
                required: isRequired,
                onChange: (e) => {
                  if (handleChange) {
                    handleChange(e);
                  }
                },
              })}
              value={value}
            />
            <label htmlFor={name}>{label}</label>
          </div>
        );
      })}
    </div>
  );
};

CheckField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  field: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        checked: PropTypes.bool,
      })
    ).isRequired,
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    fieldClass: PropTypes.string,
    isRequired: PropTypes.bool,
  }).isRequired,
  register: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
};

export default CheckField;
