import { useTranslation } from "react-i18next";

const Account = () => {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h2 className="page-heading">{t("nav.links.account")}</h2>
    </div>
  );
};

export default Account;
