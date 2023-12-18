import { FC } from 'react';
import { classNames } from '@/shared';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(styles.navbar, {}, [className])}>
    <div className={styles.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} className={styles.mainLink} to="/">Main</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
    </div>
  </div>
);
