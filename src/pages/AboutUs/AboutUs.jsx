import "./AboutUs.css";
import handshake from "../../assets/handshake.jpg";
import bird from "../../assets/bird.jpg";
import cat from "../../assets/cat.jpg";


const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <h1>About us</h1>

            <div className="aboutus-wrapper">
                <img src={handshake} />

                <div className="aboutus-content">
                    <p>
                        Welcome to website, your top resource for animal
                        information. Whether you're a student, educator,
                        researcher, or enthusiast, we've got you covered.
                    </p>
                </div>
            </div>
            <div className="aboutus-wrapper">
                <img src={cat} />

                <div className="aboutus-content">
                    <h1>Our Mission</h1>
                    <ul>
                        <li>
                            <b>Educate:</b> Detailed info on animal species,
                            habitats, and behaviors.
                        </li>
                        <li>
                            <b>Inspire:</b> Foster curiosity and appreciation
                            for dogs, cats and birds.
                        </li>
                        <li>
                            <b>Conserve:</b> Raise awareness about conservation
                            efforts.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="aboutus-wrapper">
                <img src={bird} />

                <div className="aboutus-content">
                    <h1>What We Offer</h1>
                    <ul>
                        <li>
                            <b>Database:</b> hundreds of species with images
                            and their perspective details.
                        </li>
                        <li>
                            <b>Tools:</b> Interactive cards for learning
                            resources.
                        </li>
                        <li>
                            <b>Community:</b> Share observations and join
                            discussions.
                        </li>
                    </ul>
                </div>
            </div>

            <p>
                Thank you for visiting! Let's explore and celebrate the animal
                kingdom together.
            </p>
        </div>
    );
};

export default AboutUs;
