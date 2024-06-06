import { Link, useLocation } from 'react-router-dom'
import styles from './NavLink.module.css'

const NavLink = (props) => {
    const location = useLocation()

    const isSelected = props.href === location.pathname

    return (
        <div className={styles.pet} style={{ backgroundColor: isSelected && '#eef8f8' }}>
            {!!props.icon && <img className={styles['link-icon']} src={props.icon} />}
            <Link className={`${styles.link} ${isSelected && styles['link-active']}`} to={props.href}>{props.text}</Link>
        </div>
  )
}

export default NavLink