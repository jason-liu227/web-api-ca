import { Link } from "react-router";

const StartPage = () => {
  
    return(
        <>
            <p>
                Welcome to Movies App! View your <Link to="/tasks">Movies</Link> or your <Link to="/profile">Profile</Link>.
            </p>
            <p>
                <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to view Movies!
            </p>
        </>
    );
  };

export default StartPage;