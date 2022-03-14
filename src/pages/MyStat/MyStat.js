import { useTranslation } from "react-i18next";

const MyStat = () => {
    const { t } = useTranslation();

    return (
        <div className="page">
            <h2 className="page-heading">{t("nav.links.my-stat")}</h2>
        </div>
    );
};

export default MyStat;
