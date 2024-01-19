

import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminContext';

const PrivateRoutsAdmin = ({ children }) => {

  const { isAdmin, isLoggedIn } = useAdminAuth();

 

  if (!isAdmin) {
    return <Navigate to='/signin' />;
  }

  return children;
};

export default PrivateRoutsAdmin;

