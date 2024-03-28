import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext"; // Importa il context in cui sono conservati i dati
import axios from "axios";

import { SideContext } from "./SideContext";

function Profile({ expanded, ready, setReady, setExpanded }) {
  const { userData, setUserData } = useContext(GlobalContext);

  // const [userData, setUserData] = useState({
  //   full_name:"",
  //   email:""
  // });
  // const { formData, setFormData } = useContext(GlobalContext);

  // useEffect(() => {
  //   const storedData = localStorage.getItem("userData");
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
        const response = await axios.get(`http://localhost:5000/api/user?email=${userData.email}`) ;
        console.log(response);
        if (response.data.success) {
          console.log(response.data.users);
          setUserData({
            full_name:response.data.user.full_name,
            email:response.data.user.email
          })
          console.log(userData);
        } else {
          console.error("User not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Verifica se formData.email è disponibile prima di effettuare la richiesta
    if (userData.email) {
      fetchUserData();
    }
  }, [userData.email]); // Esegui l'effetto solo quando formData.email cambia

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get("/api/user?email=" + userData.email);
  //       console.log(response);

  //       if (response.data.success) {
  //         console.log(response.data.user);
  //         setUserData(response.data.user);
  //       } else {
  //         console.error("User not found");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, [userData.email]);

  const back = () => {
    setReady(!ready);

    setTimeout(() => {
      setExpanded(!expanded);
    }, 500);
  };

  const logout = () => {
    // localStorage.removeItem("userData");
    window.location.href = "/"; // Replace "/" with your landing page URL
  };

  // const logout = () => {
  //   // Resetta i dati del profilo nel context
  //   setUserData({
  //     full_name: "",
  //     email: "",
  //   });
  //   window.location.href = "/"; // Sostituisci "/" con l'URL della tua pagina iniziale
  // };

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

            {userData && (
              <div className="userData">
                <div className="userImage"></div>
                <div className="profile-data">
                  <label>Full Name : </label>
                  <span>{userData.full_name}</span>
                  <br />
                  <br />

                  <label>Email : </label>

                  <span>{userData.email}</span>
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
