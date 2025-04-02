import React from "react";
import { Link } from "react-router-dom";
import './home.css'; 
import katy from '../../assets/images/katy.jpg'; // Assurez-vous que le chemin d'accès à l'image est correct


const Home = () => {
    return (
        <div>
            <aside>
                <img src={katy} alt="Katy EKOUE" className="profile-image" />
            </aside>
            <article>
                <h1>
                    Katy EKOUE
                </h1>
                <h3>
                    Professionnelle Polyvalent
                </h3>
                <p>
                Créative et polyvalente, je jongle entre développement web, voix off, animation événementielle et création visuelle. Que ce soit à travers du code, une vidéo ou un micro, je transforme les idées en expériences captivantes !
                </p>
                <Link>Mon Parcours</Link>
            </article>
        </div>
    );
    }

export default Home;