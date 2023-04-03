import { Link } from "react-router-dom";
import "./Login.scss";


export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Connecting Hearts, Halal Way</h1>
          <p>
          Discover your halal soulmate on our matchmaking website designed for Muslim singles looking for lasting love and companionship that aligns with their faith and values. 
          </p>
          <span>Don't you have an account?</span>
          <Link to={"/Register"}>
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
