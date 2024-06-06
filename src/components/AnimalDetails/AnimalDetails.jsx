import styles from './AnimalDetails.module.css'


const AnimalDetails = (props)=>{
    return(
        <div className={styles.card}>
            <img src={props.image} />

            <div className={styles.content}>
                <div className={styles.header}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>

                {props.details.map((detail) => <p>{detail.name}: {detail.value || '-'}</p>)}
                
                
            </div>
        </div>
        
    )
}

export default AnimalDetails


