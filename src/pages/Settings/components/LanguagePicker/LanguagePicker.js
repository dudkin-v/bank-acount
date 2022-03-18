import { useSelector, useDispatch } from "react-redux";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Select } from "../../../../components/Select";
import { onUpdateLanguage } from "../../../../store/settings/thunk";
import { setLanguage } from "../../../../store/settings/actions";

const languages = [
  { value: "ru", label: "русский" },
  { value: "en", label: "english" },
];

const LanguagePicker = () => {
  const dispatch = useDispatch();
  const token = useSelector((rootStore) => rootStore.login.token);
  const { t } = useTranslation();

  const onChangeLanguage = ({ value }) => {
    if (token) {
      dispatch(onUpdateLanguage(value));
    } else {
      dispatch(setLanguage(value));
    }
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
