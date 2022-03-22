import PropTypes from "prop-types";
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { cardTypes } from "../../../../utils/card";

const CardLogo = ({ cardType }) => {
  if (cardType === cardTypes.VISA) {
    return <SiVisa />;
  }
  if (cardType === cardTypes.MASTERCARD) {
    return <FaCcMastercard />;
  }
  return null;
};

CardLogo.propTypes = {
  cardType: PropTypes.string,
};

CardLogo.defaultProps = {
  cardType: null,
};

export default CardLogo;
