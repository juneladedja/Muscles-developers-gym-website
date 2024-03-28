import { useContext, useState } from "react";
import login from "./login.module.css";
import astronaut from "./assets/loginImg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

  // -------------------------------------------------------------------

  const handleRegisterInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setRegisterData({
      ...registerData,
      [name]: newValue,
    });

    setUserData(()=>registerData)
  };

  const handleLoginInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setLoginData({
      ...loginData,
      [name]: newValue,
    });

    setUserData(()=>loginData)

  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        fullName: registerData.fullName,
        email: registerData.email,
        password: registerData.password,
      });
      localStorage.setItem("userData", JSON.stringify(userData));

      console.log(response.data);
      navigate("/homepage");
      // Effettua altre azioni dopo la registrazione, ad esempio reindirizza l'utente alla homepage
    } catch (error) {
      console.error("Server error");
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: loginData.email,
        password: loginData.password,
      });
          localStorage.setItem("userData", JSON.stringify(userData));


      console.log(response.data);
      navigate("/homepage");
      // Effettua altre azioni dopo il login, ad esempio reindirizza l'utente alla homepage
    } catch (error) {
      console.error("Server error");
    }
  };
  // -------------------------------------------------------------------

  const [isVisible, setIsVisible] = useState(true);

  const [log, setLog] = useState(true);

  function handleLog() {
    setIsVisible(!isVisible);
    setTimeout(() => {
      setLog(!log);
    }, 300);
  }

  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  //   rememberPassword: false,
  // });

  // const handleInputChange = (event) => {
  //   const { name, value, type, checked } = event.target;
  //   const newValue = type === "checkbox" ? checked : value;

  //   setFormData({
  //     ...formData,
  //     [name]: newValue,
  //   });
  // };

  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   localStorage.setItem("formData", JSON.stringify(formData));
  //   console.log(formData);
  //   navigate("/homepage");
  // };

  // const handleSubmitRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/register", {
  //       fullName: formData.fullName,
  //       email: formData.email,
  //       password: formData.password
  //     });
  //     console.log(response.data);
  //     navigate("/homepage")
  //   } catch (error) {
  //     console.error("Server error");
  //   }
  // }

  // const handleSubmitLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/login", {
  //       email: formData.email,
  //       password: formData.password
  //     })
  //     console.log(response.data);
  //     navigate("/homepage")
  //   } catch (error) {
  //     console.error("server error");
  //   }
  // }

  // const isRegisterComplete = () => {
  //   if (log) {
  //     return formData.email && formData.password;
  //   } else {
  //     return (
  //       formData.fullName &&
  //       formData.email &&
  //       formData.password &&
  //       formData.confirmPassword
  //     );
  //   }
  // };

  const isRegisterComplete = () => {
    if (log) {
      // Se si sta eseguendo il login, controlla che email e password siano presenti
      return loginData.email && loginData.password;
    } else {
      // Se si sta eseguendo la registrazione, controlla che tutti i campi richiesti siano presenti
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
            <input
              className={login.input}
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginInputChange}
              placeholder="Password"
            />
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
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleRegisterInputChange}
              placeholder="Password"
            />
            <br />

            <input
              className={login.input}
              type="password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleRegisterInputChange}
              placeholder="Confirm Password"
            />
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
