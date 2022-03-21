import PropTypes from "prop-types";
import styled from "styled-components";
import { Spinner } from "../Spinner";
import colors from "../../utils/colors";

const Btn = styled.button`
  width: 100%;
  height: 100%;
  min-height: 37.5px;
  padding: 8px 20px;
  color: white;
  font-size: 16px;
  background-color: ${colors.turquoise};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  :disabled {
    background-color: ${colors.gray};
    cursor: ${(props) => (props.isLoading ? "wait" : "not-allowed")};
  }
  :hover:enabled,
  :active:enabled {
    box-shadow: 0 5px 15px 6px rgba(14, 60, 183, 0.2);
    background: ${colors.toryBlue};
    transition: 0.3s;
  }
`;

const Button = ({ text, type, onClick, disabled, isLoading, className }) => (
  <Btn
    type={type}
    onClick={onClick}
    disabled={disabled || isLoading}
    isLoading={isLoading}
    className={className}
  >
    {isLoading ? <Spinner /> : text}
  </Btn>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
  disabled: false,
  isLoading: false,
  className: "button",
};

export default Button;
