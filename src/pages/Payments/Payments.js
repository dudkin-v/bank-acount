import { useTranslation } from "react-i18next";

const Payments = () => {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h2 className="page-heading">{t("nav.links.payments")}</h2>
    </div>
  );
};
export default Payments;
