import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Username" />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
