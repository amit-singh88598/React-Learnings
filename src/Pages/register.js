import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  regxUserName,
  regxMobileNumber,
  regxEmail,
  regxPassword,
} from "../regularExpressions";

function Register(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const [error, setError] = useState({
    nameError: false,
    mobileError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
  });

  const handleSubmitData = () => {
    if (!(userName !== "" && regxUserName.test(userName))) {
      setError({ nameError: true });
    } else if (!(email !== "" && regxEmail.test(email))) {
      setError({ emailError: true });
    } else if (!(mobile !== "" && regxMobileNumber.test(mobile))) {
      setError({ mobileError: true });
    } else if (!(password !== "" && regxPassword.test(password))) {
      setError({ passwordError: true });
    } else if (confirmPassword === "") {
      setError({ confirmPasswordError: true });
    } else {
      if (password !== confirmPassword) {
        setError({ confirmPasswordError: true });
      } else {
        const postData = {
          userName,
          email,
          mobile,
          password,
          confirmPassword,
        };
        console.log(postData);
        Register(postData);
      }
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url("./backgroundImg.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          marginTop: 40,
          padding: 20,
          border: "2px solid white",
          borderRadius: 20,
          marginBottom: 40,
          height: "75%",
        }}
      >
        <>
          <div
            style={{ textAlign: "center", fontSize: "2em", fontWeight: 600 }}
          >
            REGISTER
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                id="User Name"
                name="User Name"
                variant="outlined"
                required
                label="User Name"
                size="small"
                type="text"
                error={error.nameError}
                helperText={
                  error.nameError === true
                    ? "Please enter correct user name."
                    : ""
                }
                onChange={(event) => {
                  setUserName(event.target.value);
                  setError({ nameError: false });
                }}
                style={{ width: 300, margin: "10px 0" }}
              />

              <TextField
                id="Email"
                name="Email"
                variant="outlined"
                required
                label="Email"
                size="small"
                type="text"
                error={error.emailError}
                helperText={
                  error.emailError === true ? "Please enter correct Email." : ""
                }
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError({ emailError: false });
                }}
                style={{ width: 300, borderRadius: 50, margin: "10px 0" }}
              />

              <TextField
                id="number"
                name="Mobile"
                variant="outlined"
                required
                label="Mobile"
                size="small"
                type="number"
                error={error.mobileError}
                helperText={
                  error.mobileError === true
                    ? "Please enter correct Mobile No."
                    : ""
                }
                onChange={(event) => {
                  setMobile(event.target.value);
                  setError({ mobileError: false });
                }}
                style={{ width: 300, borderRadius: 50, margin: "10px 0" }}
              />

              <TextField
                id="password"
                Name="password"
                variant="outlined"
                required
                label="Password"
                size="small"
                type={isPasswordVisible ? "text" : "password"}
                error={error.passwordError}
                helperText={
                  error.passwordError === true
                    ? "Password Contains Minimum Six Characters, At Least One Letter And One Number."
                    : ""
                }
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError({ passwordError: false });
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          isPasswordVisible
                            ? setIsPasswordVisible(false)
                            : setIsPasswordVisible(true);
                        }}
                      >
                        {isPasswordVisible ? (
                          <Visibility fontSize="small" />
                        ) : (
                          <VisibilityOff fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                style={{ width: 300, borderRadius: 50, margin: "10px 0" }}
              />

              <TextField
                id="password"
                Name="Confirm password"
                variant="outlined"
                required
                label="Confirm Password"
                size="small"
                type={isConfirmPasswordVisible ? "text" : "password"}
                error={error.confirmPasswordError}
                helperText={
                  error.confirmPasswordError === true
                    ? "Please Match your Password."
                    : ""
                }
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                  setError({ confirmPasswordError: false });
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          isConfirmPasswordVisible
                            ? setIsConfirmPasswordVisible(false)
                            : setIsConfirmPasswordVisible(true);
                        }}
                      >
                        {isConfirmPasswordVisible ? (
                          <Visibility fontSize="small " />
                        ) : (
                          <VisibilityOff fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                style={{ width: 300, borderRadius: 50, margin: "10px 0" }}
              />

              <button
                type="submit"
                onClick={handleSubmitData}
                style={{
                  width: 300,
                  padding: 10,
                  marginTop: 20,
                  margin: "10px 0",
                  borderRadius: 50,
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                }}
              >
                Register
              </button>
              <div style={{ marginTop: 10 }}>
                Dont have an account ?
                <span>
                  <Link to="/signIn"> SignIn </Link>
                </span>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Register;
