import { useContext, useState } from "react";
import login from "./login.module.css";
import astronaut from "./assets/loginImg.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";

function Login() {
  const {
    registerData,
    setRegisterData,
    loginData,
    setLoginData,
    userData,
    setUserData,
    formData,
    setFormData,
  } = useContext(GlobalContext);

  const [showPassword, setShowPassword] = useState(false);

  // handlechange della registrazione
  const handleRegisterInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setRegisterData({
      ...registerData,
      [name]: newValue,
    });

    setUserData(registerData);
  };

  // ///////////////////////////////////////////////

  // handlechange dell'input

  const handleLoginInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setLoginData({
      ...loginData,
      [name]: newValue,
    });

    setUserData(loginData);
  };

  // ///////////////////////////////////////////

  // registrazione

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      // Verifica se l'utente è già registrato
      const existingUserResponse = await fetch(
        "http://localhost:5000/api/user?email=" + registerData.email
      );
      const existingUserData = await existingUserResponse.json();

      if (existingUserData.success) {
        // Se l'utente è già registrato, mostra un alert e interrompi la registrazione
        alert("Utente già registrato. Effettua il login.");
        setRegisterData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        return;
      }

      // Se l'utente non è già registrato, procedi con la registrazione
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: registerData.fullName,
          email: registerData.email,
          password: registerData.password,
        }),
      });
      const data = await response.json();
      console.log(data);
      navigate("/homepage");
    } catch (error) {
      console.error("Server error");
    }
  };

  // ///////////////////////////////////////////

  // login

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful");
        navigate("/homepage");
      } else {
        console.error("Login failed:", data.message);
        alert("Credenziali non valide. Si prega di riprovare.");
        setLoginData({ email: "", password: "", rememberPassword: false });
        // Mostra un messaggio di errore all'utente
      }
    } catch (error) {
      console.error("Server error:", error.message);
      // Gestisci gli errori di rete o del server
    }
  };

  // /////////////////////////////////////////

  const [isVisible, setIsVisible] = useState(true);

  const [log, setLog] = useState(true);

  function handleLog() {
    setIsVisible(!isVisible);
    setTimeout(() => {
      setLog(!log);
      setLoginData({
        email: "",
        password: "",
        rememberPassword: false,
      });

      setRegisterData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberPassword: false,
      });

      setShowPassword(false);
    }, 300);
  }
  const navigate = useNavigate();

  const isRegisterComplete = () => {
    if (log) {
      return loginData.email && loginData.password;
    } else {
      return (
        registerData.fullName &&
        registerData.email &&
        registerData.password &&
        registerData.confirmPassword
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
            onSubmit={handleSubmitLogin}
          >
            <h2>Nebula</h2>

            <input
              className={login.input}
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginInputChange}
              placeholder="Email"
            />
            <br />

            {/* ///////////////////////////////////////// */}
            <input
              className={login.input}
              type={showPassword ? "text" : "password"}
              name="password"
              value={loginData.password}
              onChange={handleLoginInputChange}
              placeholder="Password"
            />
            <div
              className={`${login.eyeIcon} ${showPassword ? login.open : ""}`}
              onClick={() => setShowPassword(!showPassword)}
            ></div>
            <br />

            {/* ///////////////////////////////////////////// */}

            <label className={login.remember}>
              <input
                // onChange={handleInputChange}
                // checked={formData.rememberPassword}
                name="rememberPassword"
                type="checkbox"
              />
              Remember password
            </label>
            <br />

            <button disabled={!isRegisterComplete()} className={login.input}>
              Login
            </button>
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
            onSubmit={handleSubmitRegister}
          >
            <h2>Nebula</h2>

            <input
              className={login.input}
              type="text"
              name="fullName"
              value={registerData.fullName}
              onChange={handleRegisterInputChange}
              placeholder="Full Name"
            />
            <br />
            <input
              className={login.input}
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleRegisterInputChange}
              placeholder="Email"
            />
            <br />

            <input
              className={login.input}
              type={showPassword ? "text" : "password"}
              name="password"
              value={registerData.password}
              onChange={handleRegisterInputChange}
              placeholder="Password"
            />
            <div
              className={`${login.eyeIconRegister} ${
                showPassword ? login.open : ""
              }`}
              onClick={() => setShowPassword(!showPassword)}
            ></div>

            <br />

            <input
              className={login.input}
              type="password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleRegisterInputChange}
              placeholder="Confirm Password"
              required
              pattern={registerData.password} // Utilizziamo la password inserita come pattern
              title="Le password non corrispondono" // Messaggio di errore personalizzato
            />
            <div
              className={`${login.eyeIconRegister} ${
                showPassword ? login.open : ""
              }`}
              onClick={() => setShowPassword(!showPassword)}
            ></div>

            <br />
            <label className={login.remember}>
              <input
                // onChange={handleInputChange}
                // checked={formData.rememberPassword}
                name="rememberPassword"
                type="checkbox"
              />
              Remember password
            </label>
            <br />

            <button disabled={!isRegisterComplete()} className={login.input}>
              Register
            </button>
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
