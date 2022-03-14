import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Select } from "../../../../components/Select";

const languages = [
  { value: "ru", label: "русский" },
  { value: "en", label: "english" },
];

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = ({ value }) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="settings-item">
      <div className="settings-name">
        <MdLanguage />
        <p>{t("language.name")}</p>
      </div>
      <div className="settings-value">
        <Select
          options={languages}
          onChange={onChangeLanguage}
          placeholder={t("language.value")}
        />
      </div>
    </div>
  );
};

export default LanguagePicker;
