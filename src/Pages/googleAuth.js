import React, { useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

function GoogleAuth(res) {
  const clientId =
    "895595641975-38t0fke8lb34uln60o2otaj7jnefek76.apps.googleusercontent.com";
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Sucess", res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const onFailureSuccess = (res) => {
    console.log("Login Failed", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been signedOut sucessfully !!!");
    setShowLoginButton(true);
    setShowLogoutButton(false);
    console.clear();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1>Google Authentication</h1>
        {showLoginButton ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GoogleLogin
              clientId={clientId}
              buttonText="Login With Google"
              onSuccess={onLoginSuccess}
              onFailure={onFailureSuccess}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        ) : null}

        {showLogoutButton ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default GoogleAuth;
