import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import colors from "../../utils/colors";
import shadows from "../../utils/shadows";

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${colors.royalBlue};
  cursor: pointer;

  .error-message {
    position: absolute;
    top: 3px;
    right: 0;
    font-size: 12px;
    color: ${colors.error};
  }

  .secure-btn {
    position: absolute;
    top: 43%;
    right: 3%;
    width: 20px;
    height: 20px;
    background: inherit;
    display: flex;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
      color: ${colors.gray};
    }
  }
`;
const Input = styled.input`
  font-size: 16px;
  padding: ${(props) => (props.secure ? "8px 35px 8px 14px" : "8px 14px")};
  margin: 5px 0 20px;
  border-radius: 5px;
  outline: none;
  box-shadow: ${shadows.royalBlue};
`;

const InputField = ({
  name,
  label,
  onChange,
  value,
  secure,
  errorMessage,
  onBlur,
  touched,
  placeholder,
  type,
}) => {
  const [isSecure, setIsSecure] = useState(secure);

  const onSecure = () => {
    setIsSecure((prevIsSecure) => !prevIsSecure);
  };

  const secureIcon = isSecure ? (
    <MdOutlineVisibility />
  ) : (
    <MdOutlineVisibilityOff />
  );

  return (
    <Label htmlFor={name}>
      {touched && errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
      {label}
      <Input
        className="input"
        secure={secure}
        id={name}
        name={name}
        type={type || (isSecure ? "password" : "text")}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      {secure && (
        <button type="button" onClick={onSecure} className="secure-btn">
          {secureIcon}
        </button>
      )}
    </Label>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  secure: PropTypes.bool,
  errorMessage: PropTypes.string,
  touched: PropTypes.bool,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

InputField.defaultProps = {
  secure: false,
  errorMessage: undefined,
  touched: false,
  onBlur: () => {},
  placeholder: undefined,
  type: undefined,
  value: undefined,
};

export default InputField;
