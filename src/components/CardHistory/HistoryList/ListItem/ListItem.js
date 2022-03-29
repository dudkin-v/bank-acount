import styled from "styled-components";
import PropTypes from "prop-types";
import { getDate } from "../../../../utils/card";
import { Price } from "../../../Price";

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: rgba(128, 128, 128, 0.1);
  p {
    font-size: 16px;
    span:first-child {
      font-size: 12px;
      padding-right: 5px;
    }
  }
  .history-date {
    width: 25%;
    text-align: start;
    padding-left: 15px;
  }
  .price {
    width: 25%;
    text-align: end;
    padding-right: 15px;
  }
  .history-recipient {
    width: 50%;
    text-align: center;
  }
`;

const ListItem = ({ date, price }) => (
  <Item className="history-list-item">
    <p className="history-date">{getDate(date)}</p>
    <p className="history-recipient">Firstname Lastname</p>
    <Price price={price} />
  </Item>
);

ListItem.propTypes = {
  date: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ListItem;
