import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Birds.module.css'
import Card from '../../components/Card/Card';
import Searchbar from '../../components/Searchbar/Searchbar';
import { TailSpin } from 'react-loader-spinner';
import Popup from '../../components/Popup/Popup';
import AnimalDetails from '../../components/AnimalDetails/AnimalDetails';
 
const Birds = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [animalDetails, setAnimalDetails] = useState({})

    const [loader, setLoader] = useState(false)
    const [limit, setLimit] = useState(20)
    const [search, setSearch] = useState('')
    const [birds, setBirds] = useState([])

    const fetchBirds = async () => {
        setLoader(true)
        const response = await axios.get('https://freetestapi.com/api/v1/birds', { params: { search: search, limit: limit }})
        setLoader(false)

        setBirds(response.data)
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
        fetchBirds()
    }, [search, limit])

    const details = [
        { name: 'Origin', value: animalDetails.place_of_found },
        { name: 'Species', value: animalDetails.species },
        { name: 'Family', value: animalDetails.family },
        { name: 'Habitat', value: animalDetails.habitat },
        { name: 'Diet', value: animalDetails.diet },
        { name: 'Wingspan', value: animalDetails.wingspan_cm ? animalDetails.wingspan_cm + ' cm' : null },
        { name: 'Weight', value: animalDetails.weight_kg ? animalDetails.weight_kg + ' kg' : null},
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
                    {birds.map((bird) => {
                        return <Card img={bird.image} title={bird.name} description={bird.place_of_found} onClick={() => handleShowPopup(bird)} />
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

export default Birds