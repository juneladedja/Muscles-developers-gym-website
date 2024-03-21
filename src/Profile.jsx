import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useContext } from "react";

import { SideContext } from "./SideContext";

function Profile({ expanded, ready, setReady, setExpanded }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }
  }, []);

  // const { showProfile, setShowProfile } = useContext(SideContext);

  // const toggleProfile = () => {
  //   setExpanded(!expanded);

  //   setTimeout(() => {
  //     setReady(!ready);
  //   }, 2000);
  // };

  const back = () => {
    setReady(!ready);

    setTimeout(() => {
      setExpanded(!expanded);
    }, 500);
  };


  const logout = () => {
    localStorage.removeItem("formData");
    window.location.href = "/"; // Replace "/" with your landing page URL
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

            {userData && (
              <div className="userData">
                <div className="userImage"></div>
                <div className="profile-data">
                  <label>Full Name : </label>
                  <br />
                  <span>{userData.fullName}</span>
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
