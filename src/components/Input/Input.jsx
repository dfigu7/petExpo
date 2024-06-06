import styles from './Input.module.css'

const Input = (props) => {
    return (
        <div className={styles.input}>
            {!!props.icon && <img src={props.icon} />}
            <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}

export default Input