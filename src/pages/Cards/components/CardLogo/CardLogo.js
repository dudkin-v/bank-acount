import PropTypes from "prop-types";
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { getCardType, cardTypes } from "../../../../utils/card";

const CardLogo = ({ cardType }) => {
  if (cardType.toLowerCase() === cardTypes.VISA) {
    return <SiVisa />;
  }
  if (cardType.toLowerCase() === cardTypes.MASTERCARD) {
    return <FaCcMastercard />;
  }
  if (getCardType(cardType) === cardTypes.VISA) {
    return <SiVisa />;
  }
  if (getCardType(cardType) === cardTypes.MASTERCARD) {
    return <FaCcMastercard />;
  }
  return null;
};

CardLogo.propTypes = {
  cardType: PropTypes.string.isRequired,
};

export default CardLogo;
