import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { LanguagePicker } from "./components/LanguagePicker";
import { Spinner } from "./components/Spinner";
import colors from "../../utils/colors";

const SettingPage = styled.section`
  display: flex;
  flex-direction: column;
  .settings-items {
    display: flex;
    flex-direction: column;
    width: 300px;
      .settings-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .settings-name {
          display: flex;
          svg {
            font-size: 20px;
            color: ${colors.outerSpace};
          }
          p {
            font-size: 16px;
            padding: 0 10px;
            color: ${colors.outerSpace};
          }
        }
        .settings-value {
          display: flex;
          p {
            font-size: 14px;
            color: ${colors.gray};
          }
        }
      }
    }
  }
`;

const Settings = () => {
  const isLoading = useSelector((rootStore) => rootStore.settings.loading);
  const { t } = useTranslation();

  return (
    <div className="page">
      {isLoading && <Spinner />}
      <h2 className="page-heading">{t("nav.links.settings")}</h2>
      <SettingPage>
        <div className="settings-items">
          <div className="settings-item">
            <LanguagePicker />
          </div>
        </div>
      </SettingPage>
    </div>
  );
};

export default Settings;
