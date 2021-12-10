import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { regxEmail, regxPassword } from "../regularExpressions";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });

  const handleSubmitData = () => {
    if (!(email !== "" && regxEmail.test(email))) {
      setError({ emailError: true });
    } else if (!(password !== "" && regxPassword.test(password))) {
      setError({ passwordError: true });
    } else {
      const postData = {
        email,
        password,
      };
      console.log(postData);
    }
  };

  return (
    <div>
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
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              border: "2px solid white",
              height: "45%",
              marginTop: 100,
              padding: 20,
              borderRadius: 20,
            }}
          >
            <div
              style={{
                fontSize: "2em",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              SIGN-IN
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <TextField
                id="email"
                name="Email"
                variant="outlined"
                required
                label="Email"
                size="small"
                type="text"
                error={error.emailError}
                helperText={
                  error.emailError === true ? "Please enter Valid Email." : ""
                }
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError({ emailError: false });
                }}
                style={{ width: 300, borderRadius: 50, margin: "10px 0" }}
              />
              <TextField
                id="password"
                name="Password"
                variant="outlined"
                required
                label="Password"
                size="small"
                type={isPasswordVisible ? "text" : "password"}
                error={error.passwordError}
                helperText={
                  error.passwordError === true
                    ? "Please Enter valid password."
                    : ""
                }
                onChange={(event) => {
                  setpassword(event.target.value);
                  setError({ passwordError: false });
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        arial-label="toggle password visivility"
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
                style={{ width: 300, margin: "10px 0", outlineColor: "#fff" }}
              />
              <button
                style={{
                  width: 300,
                  border: "none",
                  borderRadius: 50,
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: 10,
                  marginTop: 20,
                }}
                onClick={handleSubmitData}
              >
                SignIn
              </button>
              <div style={{ marginTop: 10 }}>
                Already have account ?
                <span>
                  <Link to="/register"> Register </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
