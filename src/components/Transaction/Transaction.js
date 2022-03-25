import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import ManualTransaction from "./ManualTransaction/ManualTransaction";
import MembersTransaction from "./MembersTransaction/MembersTransaction";
import colors from "../../utils/colors";
import routes from "../../utils/routes";

const Container = styled.div`
  position: relative;
  padding: 20px 0;
  .close-btn {
    position: absolute;
    top: 20px;
    left: -20px;
    width: 20px;
    height: 20px;
    color: ${colors.error};
    cursor: pointer;
    outline: none;
  }
`;

const Transaction = () => {
  const navigate = useNavigate();
  const params = useParams();

  const onCloseTransaction = () => {
    navigate(routes.CARDS, { replace: true });
  };

  return (
    <Container isOpen={params.id}>
      {params.id && (
        <IoClose
          className="close-btn"
          role="button"
          aria-pressed={false}
          tabIndex={0}
          onClick={onCloseTransaction}
        />
      )}
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
