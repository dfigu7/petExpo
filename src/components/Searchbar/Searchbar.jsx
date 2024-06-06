import magnifyingGlass from "@phosphor-icons/core/assets/regular/magnifying-glass.svg";
import styles from './Searchbar.module.css'
import Input from "../Input/Input";

const Searchbar = ({ onChange }) => {
    return (
        <div className={styles.searchbar}>
            <Input icon={magnifyingGlass} placeholder="Search..." onChange={onChange} />
        </div>
    )
}

export default Searchbar