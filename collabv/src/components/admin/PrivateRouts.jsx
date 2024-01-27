import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const PrivateRouts = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default PrivateRouts;

