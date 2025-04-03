import React from "react";
import { Link } from "react-router-dom";
import './about.css';
 // Assurez-vous que le chemin d'accès à l'image est correct


const About = () => {
    return (
        <div className="aboutcontainer">
            <section className="part">
                <h2>Mes Formations</h2>

                    <div className="l">
                        <h4>
                            <span> Licence 3 (en cours) <br />
                                Genie Logiciel </span> <br />
                            ESIG GLOBAL SUCCESS
                        </h4>
                        <p>

                            Programmation Multimedia <br />
                            Modelisations Mathematiques <br />
                            Virtualisation Avancee <br />
                            Nouveaux Paradigmes de Bases de Donnees <br />
                            Management de Projet Informatique <br />
                            Economie Numerique <br />
                        </p>
                    </div>

                    <div className="l">
                        <h4>
                            <span> Licence 2 (2023 - 2024) <br />
                                Genie Logiciel </span> <br />
                            ESIG GLOBAL SUCCESS
                        </h4>
                        <p>
                            Cryptographie et Securite <br />
                            Management des Systemes d'Information <br />
                            Programmation Systemes <br />
                            Developpement Mobile <br />
                            Architecture Reseaux <br />
                        </p>
                    </div>

                    <div className="l">
                        <h4><span> Licence 1 (2022 - 2023) <br />
                            Genie Logiciel </span> <br />
                            ESIG GLOBAL SUCCESS</h4>
                        <p>
                            Gestion de Projets <br />
                            Droit Numerique <br />
                            Developpement Oriente Objets <br />
                        </p>
                    </div>

            </section>
            <section className="part">
                <h2>Experience Pro</h2>
                <div className="e">
                    <h4>
                    <span> Stagiaire Developpeur Laravel <br />
                            HilExpertiz </span> <br />
                            <i>Avril - Juillet 2024</i>
                    </h4>
                    <p>
                        Conception et Developpement d'Application Web <br />
                        Creation d'interfaces responsives et intuitives <br />
                        Collaboration avec l'equipe pour optimiser l'Experience Utilisateur
                    </p>
                </div>

                <div className="e">
                    <h4>
                    <span> Chef Projet - Developement d'un site pour un centre de natation <br />
                            Semaine de Professionnalisation - ESIG </span> <br />
                            <i>Avril 2024</i>
                    </h4>
                    <p>
                        Suppervision generale du projet <br />
                        Redaction du cahier de Charge <br />
                        Conception du Backend avec Laravel
                    </p>
                </div>
                <div className="e">
                    <h4>
                    <span>  <br />
                    Situation d'Activite et d'Evaluation - ESIG </span> <br />
                            <i>2022 - 2025</i>
                    </h4>
                    <p>
                         <br />
                        Creation d'interfaces responsives et intuitives <br />
                        Collaboration avec l'equipe pour optimiser l'Experience Utilisateur
                    </p>
                </div>

            </section>
            <section className="part">
                <h2>Mes Passions</h2>
                <p></p>
            </section>
        </div>
    )
}

export default About;