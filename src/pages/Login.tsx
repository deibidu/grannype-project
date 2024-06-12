import './Login.scss';
import '../sass/colors.scss';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/footer';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    navigate('Home');
  };

  return (
    <>
      <div className="login-page">
        <div className="welcome">
          <h2 className="welcome-title">
            Welcome to<br></br> <span>Grannype</span>
          </h2>
        </div>
        <form className="form" onSubmit={handleLogin}>
          <h3 className="slogan">Make your meals come true</h3>
          <input type="text" placeholder="Username" className="input-login" />
          <input type="password" placeholder="Password" className="input-login" />
          <div className="login-btn">
            <button type="submit" className="button__primary-orange">
              Login
            </button>
            <button type="button" className="button__secondary-orange">
              Register
            </button>
          </div>
          <p>
            Did you forget your password?{' '}
            <a href="#" style={{ color: '#fdfbf5', textDecoration: 'underline' }}>
              Click here
            </a>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};
