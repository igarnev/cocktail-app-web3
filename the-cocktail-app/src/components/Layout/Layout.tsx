import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from 'utils/constants/routes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  );
};
