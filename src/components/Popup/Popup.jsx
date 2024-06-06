import styles from './Popup.module.css'
import x from "@phosphor-icons/core/assets/regular/x.svg";

const Popup = (props) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.background} onClick={props.onClose} />
           
            <div className={styles.card}>
                {props.children}
                <img className={styles.exit} src={x} onClick={props.onClose} />
            </div>    
      </div> 

    )  
}

export default Popup