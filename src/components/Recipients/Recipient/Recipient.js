import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../../utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.ebb};
  padding: 20px;
  margin-right: 15px;
  border-radius: 20px;
  max-width: 90px;
  min-width: 90px;
  height: 120px;
  &:hover {
    border: 1px solid ${colors.turquoise};
    cursor: pointer;
    .recipient-name {
      color: ${colors.rhino};
    }
  }
  .recipient-name {
    font-size: 12px;
    color: ${colors.gray};
    padding-top: 10px;
  }
  .avatar-block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: white;
    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
      object-fit: cover;
      vertical-align: middle;
    }
    p {
      font-size: 18px;
      color: ${colors.rhino};
    }
  }
`;

const Recipient = ({ firstName, lastName, avatarImageUrl }) => (
  <Container>
    <div className="avatar-block">
      {avatarImageUrl ? (
        <img src={avatarImageUrl} alt="" />
      ) : (
        <p>{`${firstName[0]}${lastName[0]}`}</p>
      )}
    </div>
    <p className="recipient-name">{`${firstName} ${lastName[0]}.`}</p>
  </Container>
);

Recipient.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatarImageUrl: PropTypes.string,
};

Recipient.defaultProps = {
  avatarImageUrl: null,
};

export default Recipient;
