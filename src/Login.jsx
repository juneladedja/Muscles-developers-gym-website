import { useState } from "react";
import login from "./login.module.css";
import astronaut from "./assets/loginImg.png";

function Login() {
  const [isVisible, setIsVisible] = useState(true);

  const [log, setLog] = useState(true);

  function handleLog() {
    setIsVisible(!isVisible);
    setTimeout(() => {
      setLog(!log);
    }, 300);
  }
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberPassword: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className={login.login_container}>
        {log ? (
          <form
            className={`${login.login_container_form} ${
              isVisible ? login.fade_in : login.fade_out
            }`}
            onSubmit={handleSubmit}
          >
            <h2>Nebula</h2>

            <input
              onChange={handleInputChange}
              value={formData.email}
              name="email"
              placeholder="Email"
              type="email"
            />
            <br />
            <input
              onChange={handleInputChange}
              value={formData.password}
              name="password"
              placeholder="Password"
              type="password"
            />
            <br />

            <label className={login.remember}>
              <input
                onChange={handleInputChange}
                checked={formData.rememberPassword}
                name="rememberPassword"
                type="checkbox"
              />
              Remember password
            </label>
            <br />

            <button type="submit">Login</button>
            <br />
            <span>
              or{" "}
              <button
                onClick={handleLog}
                className={login.register}
                type="button"
              >
                Register
              </button>
            </span>
          </form>
        ) : (
          <form
            className={`${login.login_container_form} ${
              isVisible ? login.fade_out : login.fade_in
            }`}
            onSubmit={handleSubmit}
          >
            <h2>Nebula</h2>

            <input
              onChange={handleInputChange}
              value={formData.fullName}
              name="fullName"
              placeholder="Full Name"
              className="inputSignUp"
              type="text"
            />
            <br />
            <input
              onChange={handleInputChange}
              value={formData.email}
              name="email"
              placeholder="Email"
              className="inputSignUp"
              type="email"
            />
            <br />

            <input
              onChange={handleInputChange}
              value={formData.password}
              name="password"
              placeholder="Password"
              className="inputSignUp"
              type="password"
            />
            <br />

            <input
              onChange={handleInputChange}
              value={formData.confirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="inputSignUp"
              type="password"
            />
            <br />
            <label className={login.remember}>
              <input
                onChange={handleInputChange}
                checked={formData.rememberPassword}
                name="rememberPassword"
                className="checkbox18yo"
                type="checkbox"
              />
              Remember password
            </label>
            <br />

            <button type="submit">Register</button>
            <br />

            <span>
              or{" "}
              <button
                onClick={handleLog}
                className={login.register}
                type="button"
              >
                Login
              </button>
            </span>
          </form>
        )}

        <img className={login.astronaut} src={astronaut} alt="astronaut" />
      </div>
    </>
  );
}

export default Login;
