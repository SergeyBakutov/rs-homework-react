import { Outlet } from "react-router-dom"

import { PrivateRoute } from "../../components/PrivateRoute"
import { ErrorBoundary } from "../../components/ErrorBoundary"

export const CategoryLayout: React.FC = () => {
  return (
    <ErrorBoundary>
      <PrivateRoute>
        <Outlet />
      </PrivateRoute>
    </ErrorBoundary>
  )
}