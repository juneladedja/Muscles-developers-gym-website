import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext"; // Importa il context in cui sono conservati i dati
import axios from "axios";

import { SideContext } from "./SideContext";

function Profile({ expanded, ready, setReady, setExpanded }) {
  const [userData, setUserData] = useState(null);
  const { formData, setFormData } = useContext(GlobalContext);

  // useEffect(() => {
  //   const storedData = localStorage.getItem("formData");
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData);
  //     setUserData(parsedData);
  //   }
  // }, []);

  // const { showProfile, setShowProfile } = useContext(SideContext);

  // const toggleProfile = () => {
  //   setExpanded(!expanded);

  //   setTimeout(() => {
  //     setReady(!ready);
  //   }, 2000);
  // };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/user?email=${formData.email}`) ;
        console.log(response, formData.email);

        if (response.data.success) {
          setFormData(response.data.users);
          console.log(response, formData.email);
        } else {
          console.error("User not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Verifica se formData.email è disponibile prima di effettuare la richiesta
    if (formData.email) {
      fetchUserData();
    }
  }, [formData.email]); // Esegui l'effetto solo quando formData.email cambia

  const back = () => {
    setReady(!ready);

    setTimeout(() => {
      setExpanded(!expanded);
    }, 500);
  };


  // const logout = () => {
  //   localStorage.removeItem("formData");
  //   window.location.href = "/"; // Replace "/" with your landing page URL
  // };

  const logout = () => {
    // Resetta i dati del profilo nel context
    setFormData({
      fullName: "",
      email: "",
      password: "",
      rememberPassword: false,
    });
    window.location.href = "/"; // Sostituisci "/" con l'URL della tua pagina iniziale
  };

  return (
    <>
      <div
        className={`${"profile"} ${expanded ? "expanded_profile" : false} ${
          ready ? "ready_profile" : false
        }`}
      >
        <div className={`${"profile-container"} ${!ready && "hidden"}`}>
          <div className="profile-section">
            <div className="user_profile">
              <p>User Profile </p>
              <button onClick={back}> Back</button>
            </div>

            {formData && (
              <div className="userData">
                <div className="userImage"></div>
                <div className="profile-data">
                  <label>Full Name : </label>
                  <br />
                  <span>{formData.full_name}</span>
                  <br />

                  <label>Email : </label>

                  <span>{formData.email}</span>
                </div>
              </div>
            )}
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
