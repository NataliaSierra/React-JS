import './Card.css'
import imgLogo from '../../../Images/img1.png'

export const Card =() => {
    return(
        <div className="Card">
            <img className="Logo" src={imgLogo} alt= "LogoSierra"></img>
            <h2>Hola Grupo</h2>
        </div>
    )
}