import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to='/'> Shop </Link>
                <Link to='/cart'>
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    );
}

export default Navigation;