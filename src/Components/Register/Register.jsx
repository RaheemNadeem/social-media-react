import { Link } from "react-router-dom";
import "./Register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Connecting Hearts, Halal Way</h1>
          <p>
          Discover your halal soulmate on our matchmaking website designed for Muslim singles looking for lasting love and companionship that aligns with their faith and values. 
          </p>
          <span>have an account?</span>
          <Link to={"/Login"}>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Name" />
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}
