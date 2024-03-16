import { Link } from "react-router-dom";

function Header(props) {
    return(
        <div className="header">
            <ul className="navigation">
                <li><Link to="/menu">View Our Menu</Link></li>
                <li className="logo"><Link to="/"><img src={props.image} alt="Company Logo" /></Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
            <hr />
        </div>
    );
}

export default Header