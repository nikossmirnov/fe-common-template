import { routerConfig } from "@/shared/config"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

type AppRouterProps = {}

export const AppRouter = (props: AppRouterProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>} >
        <Routes>
            {Object.values(routerConfig).map((route, index) => (
                <Route 
                    key={index} 
                    path={route.path} 
                    element={route.Component} 
                />
            ))}
        </Routes>
    </Suspense>
  )
}