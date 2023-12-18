import { Suspense } from 'react';
import { classNames, useTheme } from '@/shared/index';
import { Navbar } from '@/widgets/navbar';
import { SideBar } from '@/widgets/sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true }, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
