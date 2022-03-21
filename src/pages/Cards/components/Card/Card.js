import PropTypes from "prop-types";

import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";

import PayPassSVG from "./PayPassSVG";
import { getCardType, cardTypes } from "../../../../utils/card";

const Card = ({ number, expireDate }) => (
  <div className="card-container">
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
            <p className="expire-date-value">{expireDate.month}</p>
            <span>/</span>
            <p className="expire-date-value">{expireDate.year}</p>
          </div>
          <h2>USER NAME</h2>
          {getCardType(number) === cardTypes.VISA && <SiVisa />}
          {getCardType(number) === cardTypes.MASTERCARD && <FaCcMastercard />}
        </div>
      </form>
    </div>
  </div>
);

Card.propTypes = {
  number: PropTypes.string.isRequired,
  expireDate: PropTypes.shape({
    month: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
