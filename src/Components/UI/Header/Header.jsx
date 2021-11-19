import './Header.css';
import imgLogo from '../../../Images/img1.png'

export const Header=()=> {
    return (
    <>
    <div className="header">
        <img className="Logo" src={imgLogo} alt= "LogoSierra"></img>
        <div className="Navigate">
            <a className="#">Home</a>
            <a className="#">Products</a>
            <a className="#">About</a>
            <a className="#">Contact</a>
        </div>
    </div>
    <div className="space"></div>
    </>
    )
}
