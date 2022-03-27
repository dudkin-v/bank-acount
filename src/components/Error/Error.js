import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/colors";
import errorImage from "./error-image.png";

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: rgba(252, 46, 32, 0.05);
  border-radius: 15px;
  border: 2px solid ${colors.error};
  img {
    width: 40px;
    height: auto;
    margin-right: 20px;
  }
  p {
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: ${colors.error};
  }
`;

const Error = ({ errorMessage }) => (
  <ErrorMessage className="error-message">
    <img src={errorImage} alt="error" />
    <p>{errorMessage}</p>
  </ErrorMessage>
);

Error.propTypes = {
  errorMessage: PropTypes.string,
};

Error.defaultProps = {
  errorMessage: null,
};

export default Error;
