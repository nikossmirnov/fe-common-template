import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/shared/config';

type AppRouterProps = {};

export function AppRouter(props: AppRouterProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routerConfig).map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={(
              <div className="page-wrapper">
                { route.Component }
              </div>
                        )}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
