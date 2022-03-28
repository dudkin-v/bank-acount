import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner";
import { getCardHistory } from "../../store/cards/thunk";

const Container = styled.div``;

const CardHistory = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const cardHistory = useSelector((rootStore) => rootStore.cards.cardHistory);
  const cardHistoryLoading = useSelector(
    (rootStore) => rootStore.cards.cardHistoryLoading
  );

  useEffect(() => {
    dispatch(getCardHistory(params.cardId));
  }, [params.cardId]);

  console.log(cardHistoryLoading);
  return (
    <Container>
      {cardHistoryLoading && <Spinner />}
      <table>
        {cardHistory.map((transaction) => (
          <tr key={transaction.date}>
            <td>{transaction.date}</td>
            <td>{transaction.price}</td>
          </tr>
        ))}
      </table>
    </Container>
  );
};

export default CardHistory;
