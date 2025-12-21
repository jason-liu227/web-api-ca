import { useNavigate } from "react-router";
import "../styles/css.css";
import { useContext } from "react";
import { AuthContext } from '../contexts/authContext';

const ProfilePage = () => {
    const navigate = useNavigate();
    const context = useContext(AuthContext)
  
    return (
        <div className="auth-container">
            <div className="auth-card">
        <p>
            Welcome {context.userName} {" "}
            <button onClick={() => navigate('/login')}>Login</button>
      </p>
      </div>
      </div>
    );
};

export default ProfilePage;