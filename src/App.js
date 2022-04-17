import "./styles.css";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import Profile from "./Screens/Profile/Profile";
import Resource from "./Screens/Resource/Resource";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ColorButton } from "./Components/MicroComponents/MicroComponents";

function RequireAuth(props) {
  const { userLoggedIn, children } = props;
  console.log(userLoggedIn);

  if (!userLoggedIn) {
    return (
      <Dialog
        open={true}
      >
        <DialogTitle>
          {"Login to Continue"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            These resources are only for the authorized members.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to='/login' className="router-links">
            <ColorButton>Login</ColorButton>
          </Link>
          <Link to='/register' className="router-links">
            <ColorButton>Register</ColorButton>
          </Link>
        </DialogActions>
      </Dialog>
    )
  }
  return children;
}

export default function App() {
  const [userLoggedIn, setLogin] = React.useState(false);
  const [userDetails, setUser] = React.useState({});

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login setUser={setUser} setLogin={setLogin} />} />
        <Route path="/login" element={<Login setUser={setUser} setLogin={setLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user"
          element={
            <RequireAuth userLoggedIn={userLoggedIn}>
              <Profile user={userDetails} setLogin={setLogin} />
            </RequireAuth>
          }
        />
        <Route
          path="/resources"
          element={
            <RequireAuth userLoggedIn={userLoggedIn}>
              <Resource setUser={setUser} setLogin={setLogin} />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}