import pawPrint from "@phosphor-icons/core/assets/fill/paw-print-fill.svg";
import dog from "@phosphor-icons/core/assets/regular/dog.svg";
import cat from "@phosphor-icons/core/assets/regular/cat.svg";
import bird from "@phosphor-icons/core/assets/regular/bird.svg";
import chats from "@phosphor-icons/core/assets/regular/chats.svg";
import users_three from "@phosphor-icons/core/assets/regular/users-three.svg";
import NavLink from "../NavLink/NavLink";
import { useNavigate } from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <nav className={styles.navbar}>
            <img className={styles.logo} src={pawPrint} onClick={handleNavigate} />

            <div className={styles.links}>
                <NavLink href='/dogs' icon={dog} text="Dogs" />
                <NavLink href='/cats' icon={cat} text="Cats" />
                <NavLink href='/birds' icon={bird} text="Birds" />
                
                
            </div>

            <div className={styles.links}>    
                <NavLink href='/aboutus' icon={users_three} text="About Us" /> 
                <NavLink href='/contactus' icon={chats} text="Contact Us" />
            </div>
        </nav>
    )
                
                
            
        
    

}
export default Navbar