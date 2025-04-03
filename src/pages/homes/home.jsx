import React from "react";
import { Link } from "react-router-dom";
import '../../index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import katy from '../../assets/images/katy.jpg'; // Assurez-vous que le chemin d'accès à l'image est correct


const Home = () => {
    return (
        <div className="container">

            <div className="row">

                <article className="col-12 col-md-6 col-lg-6">
                    <h1>
                        Hi je suis <span>Katy</span>
                    </h1>
                    <h3>
                        Professionnelle Polyvalent,
                    </h3>
                    <p>
                        Créative et polyvalente, je jongle entre développement web, voix off, animation événementielle et création visuelle. Que ce soit à travers du code, une vidéo ou un micro, je transforme les idées en expériences captivantes !
                    </p>
                    <Link>Mon Parcours</Link>
                </article>

                <aside className="col-12 col-md-6 col-lg-6">
                    <img src={katy} alt="Katy EKOUE" className="profile-image" />
                </aside>

            </div>
        </div>

    );
}

export default Home;