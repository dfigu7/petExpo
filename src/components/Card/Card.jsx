import styles from './Card.module.css'

const Card = (props) => {
    return(
      <div className={styles.card} onClick={props.onClick}>
        <img src={props.img} />
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
    )
}

export default Card