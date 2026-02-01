import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setislogginedin } = useContext(AuthContext);
  const navigate = useNavigate();

  //  HARDCODED CREDENTIALS
  const HARDCODED_EMAIL = "Rohit@gmail.com";
  const HARDCODED_PASSWORD = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === HARDCODED_EMAIL &&
      password === HARDCODED_PASSWORD
    ) {
      setislogginedin(true);   
      navigate("/");        
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Login</button>
      </form>

      <p style={{ fontSize: "12px", marginTop: "10px" }}>
        Use: <br />
        Email: <b>Rohit@gmail.com</b> <br />
        Password: <b>123456</b>
      </p>
    </div>
  );
}

export default Login;
