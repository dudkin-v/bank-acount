import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { CardLogo } from "../CardLogo";
import PayPassSVG from "./PayPassSVG";
import colors from "../../../../utils/colors";
import routes from "../../../../utils/routes";

const Container = styled.div`
  border-radius: 20px;
  width: 370px;
  min-height: 220px;
  margin: 0 20px 20px 0;
  ${colors.cardBackground};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    transform: scale(97%);
  }

  .card {
    width: 100%;
    height: 100%;
    padding: 10px;
    form {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      div {
        width: 100%;
      }
      .bank-name {
        display: flex;
        justify-content: flex-start;
        h2 {
          color: ${colors.ebb};
          padding: 0 10px;
        }
      }
      .card-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .curd-number {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0 20px;
          p {
            font-size: 18px;
            font-weight: bold;
            color: white;
            padding: 5px;
            border: none;
            outline: none;
            width: 55px;
            background: none;
          }
        }
        .expire-date {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          .expire-date-description {
            display: flex;
            flex-wrap: wrap;
            width: 20px;
            color: ${colors.ebb};
            font-size: 6px;
            font-weight: bold;
            line-height: 7px;
          }
          .expire-date-value {
            font-size: 16px;
            text-align: center;
            font-weight: bold;
            color: white;
            padding: 5px;
            border: none;
            outline: none;
            width: 30px;
            background: none;
          }
          span {
            font-size: 16px;
            font-weight: bold;
            color: ${colors.ebb};
          }
        }
        svg {
          width: 50px;
          height: auto;
          color: ${colors.ebb};
          position: absolute;
          bottom: 5px;
          right: 10px;
        }
        .pay-pass-mark {
          width: 45px;
          height: auto;
          color: ${colors.ebb};
          position: absolute;
          bottom: 100px;
          right: 10px;
        }
        h2 {
          color: ${colors.ebb};
          padding: 0 10px;
          font-size: 20px;
          text-transform: uppercase;
        }
      }
    }
  }
`;

const Card = ({ number, expiredDate, cardType, userName, id }) => {
  const navigate = useNavigate();
  const onShowCardHistory = () => {
    navigate(`${routes.CARD_HISTORY}${id}`);
  };
  return (
    <Container
      className="card-container"
      role="button"
      aria-pressed={false}
      tabIndex={0}
      onClick={onShowCardHistory}
    >
      <div className="card">
        <form>
          <div className="bank-name">
            <h2>Banking App</h2>
          </div>
          <div className="card-data">
            <PayPassSVG />
            <div className="curd-number">
              <p>{number.substring(0, 4)}</p>
              <p>{number.substring(4, 8)}</p>
              <p>{number.substring(8, 12)}</p>
              <p>{number.substring(12, 16)}</p>
            </div>
            <div className="expire-date">
              <p className="expire-date-description">VALID THRU</p>
              <p className="expire-date-value">{expiredDate.month}</p>
              <span>/</span>
              <p className="expire-date-value">{expiredDate.year}</p>
            </div>
            <h2>{userName}</h2>
            <CardLogo cardType={cardType} />
          </div>
        </form>
      </div>
    </Container>
  );
};

Card.propTypes = {
  number: PropTypes.string.isRequired,
  expiredDate: PropTypes.shape({
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
  cardType: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Card;
