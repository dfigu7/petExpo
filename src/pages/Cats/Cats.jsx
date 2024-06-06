import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Cats.module.css'
import Card from '../../components/Card/Card';
import Searchbar from '../../components/Searchbar/Searchbar';
import { TailSpin } from 'react-loader-spinner';
import Popup from '../../components/Popup/Popup';
import AnimalDetails from '../../components/AnimalDetails/AnimalDetails';
 
const Cats = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [animalDetails, setAnimalDetails] = useState({})

    const [loader, setLoader] = useState(false)
    const [limit, setLimit] = useState(20)
    const [search, setSearch] = useState('')
    const [birds, setCats] = useState([])

    const fetchCats = async () => {
        setLoader(true)
        const response = await axios.get('https://freetestapi.com/api/v1/cats', { params: { search: search, limit: limit }})
        setLoader(false)

        setCats(response.data)
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleLimit =(event) => {
        setLimit(event.target.value)
    }

    const handleShowPopup = (details) => {
        setShowPopup(true)
        setAnimalDetails(details)
    }

    const handleClosePopup = () => {
        setShowPopup(false)
    }

    useEffect(() => {
        fetchCats()
    }, [search, limit])

    const details = [
        { name: 'Origin', value: animalDetails.origin },
        { name: 'Temperament', value: animalDetails.temperament},
        { name: 'Colors', value: animalDetails.colors?.join(', ') },
       
     ]

    return (
        <div className={styles.page}>
            <div className={styles.limiter}>
                <Searchbar onChange={handleSearch} />
                <div className={styles.lwrapper}>
                    <label for="limit">Limit:</label>

                    <select name="items" id="items" onChange={handleLimit} value={limit}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>

            <TailSpin visible={loader} width={50} height={50} color="black" />
            {!loader && (
                <div className={styles.content}>
                    {birds.map((cat) => {
                        return <Card img={cat.image} title={cat.name} description={cat.origin} onClick={() => handleShowPopup(cat)} />
                    })}
                </div>
            )}

            {showPopup && 
                <Popup onClose={handleClosePopup}>
                    <AnimalDetails image={animalDetails.image} details={details} name={animalDetails.name} description={animalDetails.description} />
                </Popup>
            }

        </div>
    )
}

export default Cats