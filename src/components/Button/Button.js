import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/colors";

const Btn = styled.button`
  width: 100%;
  height: 100%;
  padding: 8px 20px;
  color: white;
  font-size: 16px;
  background-color: ${colors.rhino};
  border-radius: 3px;
  cursor: pointer;
  outline: none;

  :hover,
  :active,
  :focus {
    box-shadow: 0 5px 15px 6px rgba(14, 60, 183, 0.2);
    background: ${colors.coralTree};
    background: linear-gradient(
      149deg,
      rgba(162, 88, 107, 1) 0%,
      rgba(40, 47, 91, 1) 50%,
      rgba(162, 88, 107, 1) 100%
    );
  }
`;

const Button = ({ text, type, onClick }) => (
  <Btn type={type} onClick={onClick}>
    {text}
  </Btn>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
};

export default Button;
