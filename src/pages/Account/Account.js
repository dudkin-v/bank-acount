import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { IoMdLogOut } from "react-icons/io";
import { logOut } from "../../store/login/thunk";
import colors from "../../utils/colors";

const AccountPage = styled.div`
  display: flex;
  flex-direction: column;
  .account-items {
    display: flex;
    flex-direction: column;
    .account-item {
      display: flex;
      align-items: center;
      width: 120px;
      cursor: pointer;
      &:hover p {
        font-weight: bold;
        color: ${colors.royalBlue};
      }
      svg {
        font-size: 20px;
        color: black;
      }
      p {
        font-size: 16px;
        padding: 0 10px;
        color: black;
      }
    }
  }
`;

const Account = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="page">
      <h2 className="page-heading">{t("nav.links.account")}</h2>
      <AccountPage>
        <div className="account-items">
          <div
            className="account-item"
            role="button"
            tabIndex={0}
            aria-pressed="false"
            onClick={onLogOut}
          >
            <IoMdLogOut />
            <p>{t("buttons.logOut")}</p>
          </div>
        </div>
      </AccountPage>
    </div>
  );
};

export default Account;
