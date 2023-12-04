import { classNames } from '@/shared';
import { useTranslation } from "react-i18next";
import { LanguageSwithcer } from '@/widgets/LanguageSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { useState } from 'react';
import styles from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => {
    setCollapsed(!collapsed);
  }
  return (
    <div className={classNames(styles.SideBar, { [styles.collapsed]: collapsed }, [className])}>
      <button
        onClick={onToggle}
      >
        {t('toggle')}
      </button>
      <div className={styles.switcher}>
        <ThemeSwitcher />
        <LanguageSwithcer />
      </div>
    </div>
  )
}
