import './Navbar.css';
import logo from '../../assets/images/logo.png';

function Navbar() {
    return (
        <div className="main-navbar">
            <img className="nav-logo" src={logo} alt="Logo"/>
            <div className="nav-links">
                <div className="link-borrow">POŻYCZ</div>
                <div className="link-lend">WYSTAW</div>
            </div>
            <div className="nav-account">
                <div className="account-login">ZALOGUJ</div>
                <div className="account-register">ZAREJESTRUJ</div>
            </div>
        </div>
    );
}

export default Navbar;