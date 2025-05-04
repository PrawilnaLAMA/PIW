// import React from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

interface NavbarProps {
  user: any;
  filterMyBooks: () => void; // Dodaj funkcję jako prop
}

function Navbar({ user, filterMyBooks }: NavbarProps) {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="main-navbar">
      <img className="nav-logo" src={logo} alt="Logo" />
      <div className="nav-links">
        <div className="link-borrow">POŻYCZ</div>
        <div className="link-lend">WYSTAW</div>
      </div>
      <div className="nav-account">
        {user ? (
          <>
            <div className="account-logout" onClick={handleLogout}>
              WYLOGUJ
            </div>
            <div className="account-my-books" onClick={filterMyBooks}>
              MOJE
            </div>
          </>
        ) : (
          <div className="account-login" onClick={handleLogin}>
            ZALOGUJ
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;