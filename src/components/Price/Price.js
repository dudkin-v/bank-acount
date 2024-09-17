import PropTypes from "prop-types";

const Price = ({ price }) => {
  if (price.toString().includes(".")) {
    return (
      <p className="price">
        {price.toString().split(".")[0]}.
        <span>{price.toString().split(".")[1]}</span>
        <span>UAH</span>
      </p>
    );
  }
  if (!price.toString().includes(".")) {
    return (
      <p className="price">
        {price}.<span>00</span>
        <span>UAH</span>
      </p>
    );
  }
  return null;
};

Price.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Price;
