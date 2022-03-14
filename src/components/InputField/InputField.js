import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/colors";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${colors.rhino};
  cursor: pointer;
`;
const Input = styled.input`
  font-size: 16px;
  padding: 8px 14px;
  margin: 5px 0 20px;
  border: 1px solid ${colors.rhino};
  border-radius: 3px;
  background-color: #dadada;
  :focus {
    outline: none;
    border: 1px solid blue;
  }
`;

const InputField = ({ name, label, type, onChange, value }) => (
  <Label htmlFor={name}>
    {label}
    <Input
      id={name}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
    />
  </Label>
);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
