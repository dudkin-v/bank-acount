import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../../utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;
  cursor: pointer;
  margin-right: 15px;
  &:hover {
    transition: 0.4s;
    p {
      color: ${colors.royalBlue};
    }
    .avatar-block {
      border: 1px solid ${colors.royalBlue};
    }
  }

  .recipient-name {
    font-size: 12px;
    color: black;
    padding-top: 10px;
  }
  .avatar-block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${colors.cardBackground};
    border: 1px solid black;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      vertical-align: middle;
    }
    p {
      font-size: 18px;
      color: ${colors.ebb};
      text-transform: uppercase;
    }
  }
`;

const Recipient = ({ firstName, lastName, avatarImageUrl, onClick }) => {
  const userName =
    firstName.length > 6 ? `${firstName.substring(0, 4)}...` : firstName;

  return (
    <Container
      role="button"
      aria-pressed={false}
      tabIndex={0}
      onClick={onClick}
    >
      <div className="avatar-block">
        {avatarImageUrl ? (
          <img src={avatarImageUrl} alt="" />
        ) : (
          <p>{`${firstName[0]}${lastName[0]}`}</p>
        )}
      </div>
      <p className="recipient-name">{`${
        userName[0].toUpperCase() + userName.substring(1)
      } ${lastName[0].toUpperCase()}.`}</p>
    </Container>
  );
};

Recipient.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatarImageUrl: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Recipient.defaultProps = {
  avatarImageUrl: null,
};

export default Recipient;
