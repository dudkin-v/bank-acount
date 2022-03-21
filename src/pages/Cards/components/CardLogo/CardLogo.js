import PropTypes from "prop-types";
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { getCardType, cardTypes } from "../../../../utils/card";

const CardLogo = ({ numberOrType }) => {
  if (getCardType(numberOrType) === cardTypes.VISA) {
    return <SiVisa />;
  }
  if (getCardType(numberOrType) === cardTypes.MASTERCARD) {
    return <FaCcMastercard />;
  }
  return "";
};

CardLogo.propTypes = {
  numberOrType: PropTypes.string.isRequired,
};

export default CardLogo;
