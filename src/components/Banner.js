import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner(){

    const title = "La maison jungle";

    return(
        <div className="lmj-banner">
            <img src={logo} alt="La maison jungle" className='lmj-title'/>
            <h1>La maison jungle</h1>
        </div>
    )
}

export default Banner