import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/colors";

const ErrorMessage = styled.p`
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: ${colors.coralTree};
`;

const Error = ({ errorMessage }) => (
  <ErrorMessage className="error-message">{errorMessage}</ErrorMessage>
);

Error.propTypes = {
  errorMessage: PropTypes.string,
};

Error.defaultProps = {
  errorMessage: null,
};

export default Error;
