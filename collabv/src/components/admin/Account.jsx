

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminContext';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { handleAdminLogin, isLoggedIn } = useAdminAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await handleAdminLogin(email);

      if (isLoggedIn) {
        navigate('/admin/dashboard');
      } else {
        setError('Invalid admin credentials');
      }
    } catch (e) {
      setError(e.message);
      console.error(e.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Admin Sign in</h1>
        <p>
          Not an admin?{' '}
          <Link to='/'>
            Go to home
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} type='email' />
        </div>
        <div>
          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type='password' />
        </div>
        <button>
          Sign In
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminLogin;

