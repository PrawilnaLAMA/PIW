import './Footer.css';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import x from '../../assets/images/x.png';


function Footer() {
    return (
        <div className="footer">
            <img src={facebook} className="footer-facebook"/>
            <img src={instagram} className="footer-instagram"/>
            <img src={x} className="footer-x"/>
        </div>
    )
    
}

export default Footer;