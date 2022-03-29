import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import find from "lodash/fp/find";
import defaultTo from "lodash/fp/defaultTo";
import pipe from "lodash/fp/pipe";
import get from "lodash/fp/get";

import { RenderingCondition } from "../RenderingCondition";
import { Spinner } from "../Spinner";
import { getCardHistory } from "../../store/cards/thunk";
import { Error } from "../Error";
import HistoryList from "./HistoryList/HistoryList";
import colors from "../../utils/colors";

const Container = styled.div`
  .history-heading {
    display: flex;
    align-items: center;
    h2:last-child {
      margin-left: 10px;
    }
    .page-heading {
      padding-top: 0;
    }
  }
  .history-list-container {
    .history-list-heading {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${colors.royalBlue};
      margin-bottom: 10px;
      p:first-child {
        padding-left: 15px;
      }
      p:last-child {
        padding-right: 15px;
      }
    }
  }
  .no-history-description {
    text-align: center;
    font-size: 16px;
    width: 100%;
    padding: 15px 30px;
    background-color: rgba(128, 128, 128, 0.1);
    border-radius: 15px;
    border: 1px solid ${colors.gray};
  }
`;

const CardHistory = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const params = useParams();
  const myCards = useSelector((rootStore) => rootStore.cards.cards);
  const cardHistory = useSelector((rootStore) => rootStore.cards.cardHistory);
  const cardHistoryLoading = useSelector(
    (rootStore) => rootStore.cards.cardHistoryLoading
  );
  const cardHistoryError = useSelector(
    (rootStore) => rootStore.cards.cardHistoryError
  );

  useEffect(() => {
    dispatch(getCardHistory(params.cardId));
  }, [params.cardId]);

  const cardNumber = pipe(
    find(["id", params.cardId]),
    defaultTo({ number: "" }),
    get("number")
  )(myCards).substring(12, 16);

  return (
    <Container>
      <div className="history-heading">
        <h2 className="page-heading">{t("cardHistory.title")}</h2>
        <h2 className="page-heading">{`**** ${cardNumber}`}</h2>
      </div>
      <RenderingCondition
        error={cardHistoryError}
        isLoading={cardHistoryLoading}
      >
        <RenderingCondition.Pending>
          <Spinner />
        </RenderingCondition.Pending>
        <RenderingCondition.Fulfilled>
          {cardHistory.length ? (
            <div className="history-list-container">
              <ul className="history-list-heading">
                <p>{t("cardHistory.date")}</p>
                <p>{t("cardHistory.recipient")}</p>
                <p>{t("cardHistory.price")}</p>
              </ul>
              <HistoryList history={cardHistory} />
            </div>
          ) : (
            <p className="no-history-description">
              {t("cardHistory.noHistory")}
            </p>
          )}
        </RenderingCondition.Fulfilled>
        <RenderingCondition.Rejected>
          <Error errorMessage={cardHistoryError} />
        </RenderingCondition.Rejected>
      </RenderingCondition>
    </Container>
  );
};

export default CardHistory;
