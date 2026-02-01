import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // Initialize theme from localStorage
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
      return true;
    }
    return false;
  });

  const { setislogginedin } = useContext(AuthContext);
  const navigate = useNavigate();

  //  HARDCODED CREDENTIALS
  const HARDCODED_EMAIL = "Rohit@gmail.com";
  const HARDCODED_PASSWORD = "123456";

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (!isDarkTheme) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
      setislogginedin(true);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {isDarkTheme ? "☀️" : "🌙"}
      </button>

      <div className="div-container">
        <h2>NoteKeeper Login</h2>

        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p>{error}</p>}

          <button className="btn" type="submit">
            Login
          </button>
        </form>

      
      </div>
    </>
  );
}

export default Login;