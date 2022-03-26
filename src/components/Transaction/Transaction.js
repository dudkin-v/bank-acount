import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import ManualTransaction from "./ManualTransaction/ManualTransaction";
import MembersTransaction from "./MembersTransaction/MembersTransaction";
import routes from "../../utils/routes";

const Container = styled.div`
  position: relative;
  padding: 20px 0;
`;

const Transaction = () => {
  const navigate = useNavigate();
  const params = useParams();

  const onCloseTransaction = () => {
    navigate(routes.CARDS, { replace: true });
  };

  return (
    <Container isOpen={params.id}>
      {params.id &&
        (params.id === "manual" ? (
          <ManualTransaction onCloseTransaction={onCloseTransaction} />
        ) : (
          <MembersTransaction
            onCloseTransaction={onCloseTransaction}
            recipientId={params.id}
          />
        ))}
    </Container>
  );
};

export default Transaction;
