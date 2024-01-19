

import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { useAdminAuth } from '../../context/AdminContext';

const PrivateRoutes = ({ children }) => {
  const { user } = UserAuth();
  const { isAdmin } = useAdminAuth();

  if (!user) {
    return <Navigate to='/account' />;
  }
  if (isAdmin && !user) {
    return <Navigate to='/admin/dashboard' />;
  }  

  return children;
};

export default PrivateRoutes;
