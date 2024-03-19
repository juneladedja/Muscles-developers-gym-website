import { useState } from "react";
import login from "./login.module.css";
import astronaut from "./assets/loginImg.png";
import { useNavigate } from "react-router-dom";

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
    fullName: "",
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

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);
    navigate("/homepage");
  };

  const isRegisterComplete = () => {
    if (log) {
      return formData.email && formData.password;
    } else {
      return (
        formData.fullName &&
        formData.email &&
        formData.password &&
        formData.confirmPassword
      );
    }
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
              className={login.input}
              onChange={handleInputChange}
              value={formData.email}
              name="email"
              placeholder="Email"
              type="email"
            />
            <br />
            <input
              className={login.input}
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

            <button disabled={!isRegisterComplete()} className={login.input}>Login</button>
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
              className={login.input}
              onChange={handleInputChange}
              value={formData.fullName}
              name="fullName"
              placeholder="Full Name"
              type="text"
            />
            <br />
            <input
              className={login.input}
              onChange={handleInputChange}
              value={formData.email}
              name="email"
              placeholder="Email"
              type="email"
            />
            <br />

            <input
              className={login.input}
              onChange={handleInputChange}
              value={formData.password}
              name="password"
              placeholder="Password"
              type="password"
            />
            <br />

            <input
              className={login.input}
              onChange={handleInputChange}
              value={formData.confirmPassword}
              name="confirmPassword"
              placeholder="Repeat Password"
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

            <button disabled={!isRegisterComplete()} className={login.input}>Register</button>
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
