import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 8px 20px;
  color: white;
  font-size: 16px;
  background-color: #282f5b;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  
  :hover, :active, :focus {
    box-shadow: 0 5px 15px 6px rgba(14, 60, 183, 0.2);
    background: rgb(162, 88, 107);
    background: linear-gradient(149deg,
    rgba(162, 88, 107, 1) 0%,
    rgba(40, 47, 91, 1) 50%,
    rgba(162, 88, 107, 1) 100%);
  }
`;

const SubmitButton = ({text, type}) => (
  <Button type={type}>{text}</Button>
);

SubmitButton.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default SubmitButton;