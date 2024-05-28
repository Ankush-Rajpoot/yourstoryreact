import React, { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { UserContext } from "./UserContext";

function LoginSignUp({ open, handleClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [files, setFiles] = useState(null);
  const { setUserInfo } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // console.log("Login:", "Username:", username, "Password:", password);

      const loginResponse = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (loginResponse.ok) {
        loginResponse.json().then((userInfo) => {
          setUserInfo(userInfo);
          setRedirect(true);
        });
      } else {
        console.log("wrong login credentials: ");
      }

      if (redirect) {
        return <Navigate to={"/"} />;
      }
    } else {
      console.log(
        "Signup:",
        "Username:",
        username,
        "Email:",
        email,
        "Password:",
        password,
        "files",
        files
      );
      const data = new FormData();
      data.set("username", username);
      data.set("email", email);
      data.set("password", password);
      data.set("file", files[0]);

      try {
        await fetch("http://localhost:4000/register", {
          method: "POST",
          body: data,
          // headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        console.log("Error in registration: ", error);
      }
    }

    handleClose();
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
          )}

          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          {!isLogin && (
            <>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
            </>
          )}

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <div className="button-container">
            <Button type="submit" id="modal-submit-button">
              {isLogin ? "Login" : "Signup"}
            </Button>
            <Button id="modal-close-button" onClick={handleClose}>
              Close
            </Button>
          </div>
        </form>
        <div className="toggle-container">
          {isLogin ? (
            <p>
              Don't have an account? <br />
              <Button id="toggle-button" onClick={toggleForm}>
                Create a new Account
              </Button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Button id="toggle-button" onClick={toggleForm}>
                Login
              </Button>
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default LoginSignUp;

// {
//   "username": "sdfsa",
//   "email": "sdadsf@gmail.com",
//   "password": "$2b$10$WXFittnQg4KVbGKvuNm5ZeoOnTrL2j2tx0QJwJNhqep8GjuoBulji",
//   "_id": "6654aec56c281f79312162eb",
//   "__v": 0
// }
