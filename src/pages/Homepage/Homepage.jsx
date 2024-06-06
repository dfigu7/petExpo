import React from "react";
import "./Homepage.css";

import dog from "../../assets/dog.jpg";
import cat from "../../assets/cat.jpg";
import bird from "../../assets/bird.jpg";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div className="homepage-container">
            <div className="wrapper">
                <h1>
                    Get Ready to Be Amazed by the Extraordinary Traits of Pets
                </h1>
                <p>
                    Discover the playful antics of dogs, the aloof elegance of
                    cats, and the melodious chirps of birds.
                </p>
            </div>

            <main>
                <div className="animal" onClick={() => navigate("/dogs")}>
                    <img src={dog} alt="Image of dogs" />
                    <div className="description">
                        <h2>Pawsome Dogs</h2>
                        <p>
                            Meet our canine pals and learn about their loyalty,
                            energy, and heartwarming antics.
                        </p>
                    </div>
                </div>

                <div className="animal" onClick={() => navigate("/cats")}>
                    <img src={cat} alt="Image of cats" />
                    <div className="description">
                        <h2>Feline Charm</h2>
                        <p>
                            Indulge in the mysterious allure of cats with their
                            grace, independence, and quirky behaviors.
                        </p>
                    </div>
                </div>

                <div className="animal" onClick={() => navigate("/birds")}>
                    <img src={bird} alt="Image of birds" />
                    <div className="description">
                        <h2>Birdie Wonders</h2>
                        <p>
                            Fly into the colorful world of birds and discover
                            their beauty, intelligence, and cheerful melodies.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Homepage;
