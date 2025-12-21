import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from '../contexts/authContext';
import "../styles/css.css";

const StartPage = () => {
    const context = useContext(AuthContext);

    return (
     <div className="auth-container">
        <div className="auth-card">
            {context.isAuthenticated ? (
            <p>
                Welcome {context.userName}! View your <Link to="/discover">Movies</Link> or your <Link to="/profile">Profile</Link>.
            </p>
            ) : (
            <p>
                <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to view Movies!
            </p>
        )}
         </div>
    </div>
    );
}

export default StartPage;