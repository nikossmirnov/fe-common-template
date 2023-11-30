import { Button, classNames } from "@/shared";
import { ThemeButton } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import styles from './LanguageSwithcer.module.scss';

interface LangSwitcherProps {
    className?: string
};

export const LanguageSwithcer = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'cn' : 'en');
    };
    
  return (
    <div className={classNames(styles.LangSwitcher, {}, [className])}>
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
        >
            {t('Language')}
        </Button>
    </div>
  )
}
