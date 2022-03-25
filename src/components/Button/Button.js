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
  background-color: ${colors.royalBlue};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: 0.4s;

  :disabled {
    background-color: ${colors.gray};
    cursor: ${(props) => (props.isLoading ? "wait" : "not-allowed")};
  }

  :hover:enabled,
  :active:enabled {
    background: #311bbb;
    transition: 0.4s;
    transform: scale(98%);
  }
`;

const Button = ({ text, type, onClick, disabled, isLoading }) => (
  <Btn
    type={type}
    onClick={onClick}
    disabled={disabled || isLoading}
    isLoading={isLoading}
    className="button"
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
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
  disabled: false,
  isLoading: false,
};

export default Button;
