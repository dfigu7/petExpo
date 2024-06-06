import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Dogs.module.css'
import Card from '../../components/Card/Card';
import Searchbar from '../../components/Searchbar/Searchbar';
import { TailSpin } from 'react-loader-spinner';
import Popup from '../../components/Popup/Popup';
import AnimalDetails from '../../components/AnimalDetails/AnimalDetails';


 
const Dogs = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [animalDetails, setAnimalDetails] = useState({})

    const [loader, setLoader] = useState(false)
    const [limit, setLimit] = useState(20)
    const [search, setSearch] = useState('')
    const [dogs, setDogs] = useState([])

    const fetchDogs = async () => {
        setLoader(true)
        const response = await axios.get('https://freetestapi.com/api/v1/dogs', { params: { search: search, limit: limit }})
        setLoader(false)

        setDogs(response.data)
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
        fetchDogs()
    }, [search, limit])

    const details = [
        { name: 'Origin', value: animalDetails.origin},
        { name: 'Breed Group', value: animalDetails.breed_group},
        { name: 'Size', value: animalDetails.size},
        { name: 'Lifespan', value: animalDetails.lifespan},
        { name: 'Tempereament', value: animalDetails.temperament},
        { name: 'Colors', value: animalDetails.colors?.join(', ')},
        
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
                    {dogs.map((dog) => {
                        return <Card img={dog.image} title={dog.name} description={dog.origin} onClick={() => handleShowPopup(dog)} />
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

export default Dogs