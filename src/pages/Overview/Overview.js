import { useTranslation } from "react-i18next";

const Overview = () => {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h2 className="page-heading">{t("nav.links.overview")}</h2>
    </div>
  );
};

export default Overview;
